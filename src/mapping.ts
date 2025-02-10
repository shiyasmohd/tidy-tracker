import { BigDecimal, ethereum, Address } from "@graphprotocol/graph-ts";

import { Approval, ERC20, Transfer } from "../generated/ERC20/ERC20";
import {
  Account,
  Token,
  TokenApproval,
  TokenBalance,
} from "../generated/schema";

const ZERO_ADDR = Address.fromHexString('0x0000000000000000000000000000000000000000');

function loadOrCreateAccount(address: Address): Account | null {
  let account = Account.load(address);
  if (!account) {
    account = new Account(address);
    account.save();
  }
  return account;
}

function loadOrCreateToken(event: ethereum.Event): Token | null {
  let token = Token.load(event.address);
  if (!token) {
    let erc20 = ERC20.bind(event.address);

    let nameResult = erc20.try_name();
    if (nameResult.reverted) {
      return null;
    }

    let symbolResult = erc20.try_symbol();
    if (symbolResult.reverted) {
      return null;
    }

    let decimalsResult = erc20.try_decimals();
    if (decimalsResult.reverted) {
      return null;
    }

    // Ignore any weird tokens to avoid overflowing the `decimals` field (which is an i32)
    // On mainnet for example there is at least one token which has a huge value for `decimals`
    // and that would overflow the Token entity's i32 field for the decimals
    if (decimalsResult.value.toBigDecimal().gt(BigDecimal.fromString("255"))) {
      return null;
    }

    token = new Token(event.address);
    token.name = nameResult.value;
    token.symbol = symbolResult.value;
    token.decimals = decimalsResult.value.toI32();
    token.save();
  }
  return token;
}

export function handleApproval(event: Approval): void {
  let token = loadOrCreateToken(event);
  if (!token) {
    return;
  }

  let value = event.params.value.toBigDecimal();

  let ownerAccount = loadOrCreateAccount(event.params.owner);
  let spenderAccount = loadOrCreateAccount(event.params.spender);

  if (!ownerAccount || !spenderAccount) {
    return;
  }

  // Create composite ID using Bytes concatenation
  let approvalId = token.id.concat(ownerAccount.id).concat(spenderAccount.id);

  let tokenApproval = TokenApproval.load(approvalId);
  if (!tokenApproval) {
    tokenApproval = new TokenApproval(approvalId);
    tokenApproval.token = token.id;
    tokenApproval.ownerAccount = ownerAccount.id;
    tokenApproval.spenderAccount = spenderAccount.id;
  }
  tokenApproval.value = value;
  tokenApproval.save();
}

export function handleTransfer(event: Transfer): void {
  let token = loadOrCreateToken(event);
  if (!token) {
    return;
  }

  let value = event.params.value.toBigDecimal();

  let fromAccount = loadOrCreateAccount(event.params.from);
  let toAccount = loadOrCreateAccount(event.params.to);

  if (!fromAccount || !toAccount) {
    return;
  }

  if (fromAccount.id != ZERO_ADDR) {
    let balanceId = token.id.concat(fromAccount.id)
    let fromTokenBalance = TokenBalance.load(balanceId);
    if (!fromTokenBalance) {
      fromTokenBalance = new TokenBalance(balanceId);
      fromTokenBalance.token = token.id;
      fromTokenBalance.account = fromAccount.id;
      fromTokenBalance.value = BigDecimal.fromString("0");
    }
    fromTokenBalance.value = fromTokenBalance.value.minus(value);
    fromTokenBalance.save();
  }

  let toBalanceId = token.id.concat(toAccount.id)
  let toTokenBalance = TokenBalance.load(toBalanceId);
  if (!toTokenBalance) {
    toTokenBalance = new TokenBalance(toBalanceId);
    toTokenBalance.token = token.id;
    toTokenBalance.account = toAccount.id;
    toTokenBalance.value = BigDecimal.fromString("0");
  }
  toTokenBalance.value = toTokenBalance.value.plus(value);
  toTokenBalance.save();
}
