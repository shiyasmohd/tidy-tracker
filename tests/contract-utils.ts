import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BreedParentA,
  BreedParentB,
  ClaimNft,
  ClaimPendingTokensFromSuperLike,
  ClaimSpecialNft,
  Gen1NFT,
  OwnershipTransferred,
  SendSpecialNft,
  SendTokenToBreeding,
  SendTokensForSwiping,
  SuperLikeResponse,
  Withdraw,
  WithdrawERC20Token,
  WithdrawalNft,
  changeTireAmountEvent,
  cliamNftInfo,
  setAuthAddressEvent,
  setBreedDurationEvent,
  setCostForBreedingEvent,
  setCostForSuperLikeEvent,
  setGen1NFTAddressEvent,
  setNftAddressEvent,
  setPercentageForGenGapEvent,
  setRabbitTokenEvent,
  setSuperLikeRatesEvent,
  setTimeLimitSuperLikeEvent,
  setTokenBurnAddressEvent,
  setWaitTimeForBreedingEvent,
  superLike
} from "../generated/Contract/Contract"

export function createBreedParentAEvent(
  parentA: BigInt,
  parentB: BigInt,
  breedId: BigInt,
  user: Address,
  ParentANftAddress: Address,
  ParentBNftAddress: Address,
  stratTime: BigInt,
  costParentA: BigInt,
  isPaying: boolean
): BreedParentA {
  let breedParentAEvent = changetype<BreedParentA>(newMockEvent())

  breedParentAEvent.parameters = new Array()

  breedParentAEvent.parameters.push(
    new ethereum.EventParam(
      "parentA",
      ethereum.Value.fromUnsignedBigInt(parentA)
    )
  )
  breedParentAEvent.parameters.push(
    new ethereum.EventParam(
      "parentB",
      ethereum.Value.fromUnsignedBigInt(parentB)
    )
  )
  breedParentAEvent.parameters.push(
    new ethereum.EventParam(
      "breedId",
      ethereum.Value.fromUnsignedBigInt(breedId)
    )
  )
  breedParentAEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  breedParentAEvent.parameters.push(
    new ethereum.EventParam(
      "ParentANftAddress",
      ethereum.Value.fromAddress(ParentANftAddress)
    )
  )
  breedParentAEvent.parameters.push(
    new ethereum.EventParam(
      "ParentBNftAddress",
      ethereum.Value.fromAddress(ParentBNftAddress)
    )
  )
  breedParentAEvent.parameters.push(
    new ethereum.EventParam(
      "stratTime",
      ethereum.Value.fromUnsignedBigInt(stratTime)
    )
  )
  breedParentAEvent.parameters.push(
    new ethereum.EventParam(
      "costParentA",
      ethereum.Value.fromUnsignedBigInt(costParentA)
    )
  )
  breedParentAEvent.parameters.push(
    new ethereum.EventParam("isPaying", ethereum.Value.fromBoolean(isPaying))
  )

  return breedParentAEvent
}

export function createBreedParentBEvent(
  parentA: BigInt,
  parentB: BigInt,
  breedId: BigInt,
  user: Address,
  ParentBNftAddress: Address,
  Time: BigInt,
  endTime: BigInt,
  costParentB: BigInt,
  isPaying: boolean
): BreedParentB {
  let breedParentBEvent = changetype<BreedParentB>(newMockEvent())

  breedParentBEvent.parameters = new Array()

  breedParentBEvent.parameters.push(
    new ethereum.EventParam(
      "parentA",
      ethereum.Value.fromUnsignedBigInt(parentA)
    )
  )
  breedParentBEvent.parameters.push(
    new ethereum.EventParam(
      "parentB",
      ethereum.Value.fromUnsignedBigInt(parentB)
    )
  )
  breedParentBEvent.parameters.push(
    new ethereum.EventParam(
      "breedId",
      ethereum.Value.fromUnsignedBigInt(breedId)
    )
  )
  breedParentBEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  breedParentBEvent.parameters.push(
    new ethereum.EventParam(
      "ParentBNftAddress",
      ethereum.Value.fromAddress(ParentBNftAddress)
    )
  )
  breedParentBEvent.parameters.push(
    new ethereum.EventParam("Time", ethereum.Value.fromUnsignedBigInt(Time))
  )
  breedParentBEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  breedParentBEvent.parameters.push(
    new ethereum.EventParam(
      "costParentB",
      ethereum.Value.fromUnsignedBigInt(costParentB)
    )
  )
  breedParentBEvent.parameters.push(
    new ethereum.EventParam("isPaying", ethereum.Value.fromBoolean(isPaying))
  )

  return breedParentBEvent
}

export function createClaimNftEvent(
  breedId: BigInt,
  nftAddress: Address,
  user: Address,
  nftId: BigInt,
  isDead: boolean,
  claimTime: BigInt
): ClaimNft {
  let claimNftEvent = changetype<ClaimNft>(newMockEvent())

  claimNftEvent.parameters = new Array()

  claimNftEvent.parameters.push(
    new ethereum.EventParam(
      "breedId",
      ethereum.Value.fromUnsignedBigInt(breedId)
    )
  )
  claimNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  claimNftEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  claimNftEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  claimNftEvent.parameters.push(
    new ethereum.EventParam("isDead", ethereum.Value.fromBoolean(isDead))
  )
  claimNftEvent.parameters.push(
    new ethereum.EventParam(
      "claimTime",
      ethereum.Value.fromUnsignedBigInt(claimTime)
    )
  )

  return claimNftEvent
}

export function createClaimPendingTokensFromSuperLikeEvent(
  fromNftId: BigInt,
  fromAddress: Address,
  fromOwnerAddress: Address,
  toNftId: BigInt,
  toNftAddress: Address,
  toOwnerAddress: Address,
  time: BigInt,
  tokenAmount: BigInt,
  seed: BigInt,
  superLikeNFTId: BigInt
): ClaimPendingTokensFromSuperLike {
  let claimPendingTokensFromSuperLikeEvent =
    changetype<ClaimPendingTokensFromSuperLike>(newMockEvent())

  claimPendingTokensFromSuperLikeEvent.parameters = new Array()

  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam(
      "fromNftId",
      ethereum.Value.fromUnsignedBigInt(fromNftId)
    )
  )
  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam(
      "fromAddress",
      ethereum.Value.fromAddress(fromAddress)
    )
  )
  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam(
      "fromOwnerAddress",
      ethereum.Value.fromAddress(fromOwnerAddress)
    )
  )
  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam(
      "toNftId",
      ethereum.Value.fromUnsignedBigInt(toNftId)
    )
  )
  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam(
      "toNftAddress",
      ethereum.Value.fromAddress(toNftAddress)
    )
  )
  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam(
      "toOwnerAddress",
      ethereum.Value.fromAddress(toOwnerAddress)
    )
  )
  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )
  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam("seed", ethereum.Value.fromUnsignedBigInt(seed))
  )
  claimPendingTokensFromSuperLikeEvent.parameters.push(
    new ethereum.EventParam(
      "superLikeNFTId",
      ethereum.Value.fromUnsignedBigInt(superLikeNFTId)
    )
  )

  return claimPendingTokensFromSuperLikeEvent
}

export function createClaimSpecialNftEvent(
  breedId: BigInt,
  nftAddress: Address,
  user: Address,
  nftId: BigInt,
  claimTime: BigInt
): ClaimSpecialNft {
  let claimSpecialNftEvent = changetype<ClaimSpecialNft>(newMockEvent())

  claimSpecialNftEvent.parameters = new Array()

  claimSpecialNftEvent.parameters.push(
    new ethereum.EventParam(
      "breedId",
      ethereum.Value.fromUnsignedBigInt(breedId)
    )
  )
  claimSpecialNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  claimSpecialNftEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  claimSpecialNftEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  claimSpecialNftEvent.parameters.push(
    new ethereum.EventParam(
      "claimTime",
      ethereum.Value.fromUnsignedBigInt(claimTime)
    )
  )

  return claimSpecialNftEvent
}

export function createGen1NFTEvent(
  breedId: BigInt,
  nftAddress: Address,
  user: Address,
  nftId: BigInt,
  claimTime: BigInt
): Gen1NFT {
  let gen1NftEvent = changetype<Gen1NFT>(newMockEvent())

  gen1NftEvent.parameters = new Array()

  gen1NftEvent.parameters.push(
    new ethereum.EventParam(
      "breedId",
      ethereum.Value.fromUnsignedBigInt(breedId)
    )
  )
  gen1NftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  gen1NftEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  gen1NftEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  gen1NftEvent.parameters.push(
    new ethereum.EventParam(
      "claimTime",
      ethereum.Value.fromUnsignedBigInt(claimTime)
    )
  )

  return gen1NftEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSendSpecialNftEvent(
  _breedId: BigInt,
  specialNft: BigInt,
  nftAddress: Address,
  user: Address,
  Time: BigInt
): SendSpecialNft {
  let sendSpecialNftEvent = changetype<SendSpecialNft>(newMockEvent())

  sendSpecialNftEvent.parameters = new Array()

  sendSpecialNftEvent.parameters.push(
    new ethereum.EventParam(
      "_breedId",
      ethereum.Value.fromUnsignedBigInt(_breedId)
    )
  )
  sendSpecialNftEvent.parameters.push(
    new ethereum.EventParam(
      "specialNft",
      ethereum.Value.fromUnsignedBigInt(specialNft)
    )
  )
  sendSpecialNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  sendSpecialNftEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  sendSpecialNftEvent.parameters.push(
    new ethereum.EventParam("Time", ethereum.Value.fromUnsignedBigInt(Time))
  )

  return sendSpecialNftEvent
}

export function createSendTokenToBreedingEvent(
  _breedId: BigInt,
  amount: BigInt,
  bias: Array<BigInt>,
  user: Address,
  time: BigInt
): SendTokenToBreeding {
  let sendTokenToBreedingEvent = changetype<SendTokenToBreeding>(newMockEvent())

  sendTokenToBreedingEvent.parameters = new Array()

  sendTokenToBreedingEvent.parameters.push(
    new ethereum.EventParam(
      "_breedId",
      ethereum.Value.fromUnsignedBigInt(_breedId)
    )
  )
  sendTokenToBreedingEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  sendTokenToBreedingEvent.parameters.push(
    new ethereum.EventParam(
      "bias",
      ethereum.Value.fromUnsignedBigIntArray(bias)
    )
  )
  sendTokenToBreedingEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  sendTokenToBreedingEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return sendTokenToBreedingEvent
}

export function createSendTokensForSwipingEvent(
  user: Address,
  amount: BigInt,
  nftAddress: Address,
  nftId: BigInt,
  time: BigInt
): SendTokensForSwiping {
  let sendTokensForSwipingEvent = changetype<SendTokensForSwiping>(
    newMockEvent()
  )

  sendTokensForSwipingEvent.parameters = new Array()

  sendTokensForSwipingEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  sendTokensForSwipingEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  sendTokensForSwipingEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  sendTokensForSwipingEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  sendTokensForSwipingEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return sendTokensForSwipingEvent
}

export function createSuperLikeResponseEvent(
  fromNftId: BigInt,
  fromAddress: Address,
  fromOwnerAddress: Address,
  toNftId: BigInt,
  toNftAddress: Address,
  toOwnerAddress: Address,
  time: BigInt,
  isAccepted: boolean,
  seed: BigInt,
  superLikeNFTId: BigInt
): SuperLikeResponse {
  let superLikeResponseEvent = changetype<SuperLikeResponse>(newMockEvent())

  superLikeResponseEvent.parameters = new Array()

  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam(
      "fromNftId",
      ethereum.Value.fromUnsignedBigInt(fromNftId)
    )
  )
  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam(
      "fromAddress",
      ethereum.Value.fromAddress(fromAddress)
    )
  )
  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam(
      "fromOwnerAddress",
      ethereum.Value.fromAddress(fromOwnerAddress)
    )
  )
  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam(
      "toNftId",
      ethereum.Value.fromUnsignedBigInt(toNftId)
    )
  )
  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam(
      "toNftAddress",
      ethereum.Value.fromAddress(toNftAddress)
    )
  )
  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam(
      "toOwnerAddress",
      ethereum.Value.fromAddress(toOwnerAddress)
    )
  )
  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )
  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam(
      "isAccepted",
      ethereum.Value.fromBoolean(isAccepted)
    )
  )
  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam("seed", ethereum.Value.fromUnsignedBigInt(seed))
  )
  superLikeResponseEvent.parameters.push(
    new ethereum.EventParam(
      "superLikeNFTId",
      ethereum.Value.fromUnsignedBigInt(superLikeNFTId)
    )
  )

  return superLikeResponseEvent
}

export function createWithdrawEvent(amount: BigInt): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}

export function createWithdrawERC20TokenEvent(
  tokenContractAddress: Address,
  amount: BigInt
): WithdrawERC20Token {
  let withdrawErc20TokenEvent = changetype<WithdrawERC20Token>(newMockEvent())

  withdrawErc20TokenEvent.parameters = new Array()

  withdrawErc20TokenEvent.parameters.push(
    new ethereum.EventParam(
      "tokenContractAddress",
      ethereum.Value.fromAddress(tokenContractAddress)
    )
  )
  withdrawErc20TokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawErc20TokenEvent
}

export function createWithdrawalNftEvent(
  breedId: BigInt,
  user: Address,
  nftId: BigInt,
  amount: BigInt,
  nftAddress: Address,
  withdrawalTime: BigInt
): WithdrawalNft {
  let withdrawalNftEvent = changetype<WithdrawalNft>(newMockEvent())

  withdrawalNftEvent.parameters = new Array()

  withdrawalNftEvent.parameters.push(
    new ethereum.EventParam(
      "breedId",
      ethereum.Value.fromUnsignedBigInt(breedId)
    )
  )
  withdrawalNftEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawalNftEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  withdrawalNftEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawalNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  withdrawalNftEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawalTime",
      ethereum.Value.fromUnsignedBigInt(withdrawalTime)
    )
  )

  return withdrawalNftEvent
}

export function createchangeTireAmountEventEvent(
  tierId: BigInt,
  amount: BigInt
): changeTireAmountEvent {
  let changeTireAmountEventEvent = changetype<changeTireAmountEvent>(
    newMockEvent()
  )

  changeTireAmountEventEvent.parameters = new Array()

  changeTireAmountEventEvent.parameters.push(
    new ethereum.EventParam("tierId", ethereum.Value.fromUnsignedBigInt(tierId))
  )
  changeTireAmountEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return changeTireAmountEventEvent
}

export function createcliamNftInfoEvent(
  breedId: BigInt,
  nftAddress: Address,
  user: Address,
  nftId: BigInt,
  gen1Id: BigInt,
  gen1NftAddress: Address,
  claimTime: BigInt
): cliamNftInfo {
  let cliamNftInfoEvent = changetype<cliamNftInfo>(newMockEvent())

  cliamNftInfoEvent.parameters = new Array()

  cliamNftInfoEvent.parameters.push(
    new ethereum.EventParam(
      "breedId",
      ethereum.Value.fromUnsignedBigInt(breedId)
    )
  )
  cliamNftInfoEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  cliamNftInfoEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  cliamNftInfoEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  cliamNftInfoEvent.parameters.push(
    new ethereum.EventParam("gen1Id", ethereum.Value.fromUnsignedBigInt(gen1Id))
  )
  cliamNftInfoEvent.parameters.push(
    new ethereum.EventParam(
      "gen1NftAddress",
      ethereum.Value.fromAddress(gen1NftAddress)
    )
  )
  cliamNftInfoEvent.parameters.push(
    new ethereum.EventParam(
      "claimTime",
      ethereum.Value.fromUnsignedBigInt(claimTime)
    )
  )

  return cliamNftInfoEvent
}

export function createsetAuthAddressEventEvent(
  callerAddress: Address,
  authAddress: Address
): setAuthAddressEvent {
  let setAuthAddressEventEvent = changetype<setAuthAddressEvent>(newMockEvent())

  setAuthAddressEventEvent.parameters = new Array()

  setAuthAddressEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setAuthAddressEventEvent.parameters.push(
    new ethereum.EventParam(
      "authAddress",
      ethereum.Value.fromAddress(authAddress)
    )
  )

  return setAuthAddressEventEvent
}

export function createsetBreedDurationEventEvent(
  callerAddress: Address,
  breedDuration: BigInt
): setBreedDurationEvent {
  let setBreedDurationEventEvent = changetype<setBreedDurationEvent>(
    newMockEvent()
  )

  setBreedDurationEventEvent.parameters = new Array()

  setBreedDurationEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setBreedDurationEventEvent.parameters.push(
    new ethereum.EventParam(
      "breedDuration",
      ethereum.Value.fromUnsignedBigInt(breedDuration)
    )
  )

  return setBreedDurationEventEvent
}

export function createsetCostForBreedingEventEvent(
  callerAddress: Address,
  costForBreeding: BigInt
): setCostForBreedingEvent {
  let setCostForBreedingEventEvent = changetype<setCostForBreedingEvent>(
    newMockEvent()
  )

  setCostForBreedingEventEvent.parameters = new Array()

  setCostForBreedingEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setCostForBreedingEventEvent.parameters.push(
    new ethereum.EventParam(
      "costForBreeding",
      ethereum.Value.fromUnsignedBigInt(costForBreeding)
    )
  )

  return setCostForBreedingEventEvent
}

export function createsetCostForSuperLikeEventEvent(
  callerAddress: Address,
  costForSuperLike: BigInt
): setCostForSuperLikeEvent {
  let setCostForSuperLikeEventEvent = changetype<setCostForSuperLikeEvent>(
    newMockEvent()
  )

  setCostForSuperLikeEventEvent.parameters = new Array()

  setCostForSuperLikeEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setCostForSuperLikeEventEvent.parameters.push(
    new ethereum.EventParam(
      "costForSuperLike",
      ethereum.Value.fromUnsignedBigInt(costForSuperLike)
    )
  )

  return setCostForSuperLikeEventEvent
}

export function createsetGen1NFTAddressEventEvent(
  callerAddress: Address,
  Gen1NFTAddress: Address
): setGen1NFTAddressEvent {
  let setGen1NftAddressEventEvent = changetype<setGen1NFTAddressEvent>(
    newMockEvent()
  )

  setGen1NftAddressEventEvent.parameters = new Array()

  setGen1NftAddressEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setGen1NftAddressEventEvent.parameters.push(
    new ethereum.EventParam(
      "Gen1NFTAddress",
      ethereum.Value.fromAddress(Gen1NFTAddress)
    )
  )

  return setGen1NftAddressEventEvent
}

export function createsetNftAddressEventEvent(
  callerAddress: Address,
  nftAddress: Address
): setNftAddressEvent {
  let setNftAddressEventEvent = changetype<setNftAddressEvent>(newMockEvent())

  setNftAddressEventEvent.parameters = new Array()

  setNftAddressEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setNftAddressEventEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )

  return setNftAddressEventEvent
}

export function createsetPercentageForGenGapEventEvent(
  percentage: BigInt
): setPercentageForGenGapEvent {
  let setPercentageForGenGapEventEvent =
    changetype<setPercentageForGenGapEvent>(newMockEvent())

  setPercentageForGenGapEventEvent.parameters = new Array()

  setPercentageForGenGapEventEvent.parameters.push(
    new ethereum.EventParam(
      "percentage",
      ethereum.Value.fromUnsignedBigInt(percentage)
    )
  )

  return setPercentageForGenGapEventEvent
}

export function createsetRabbitTokenEventEvent(
  callerAddress: Address,
  rabbitToken: Address
): setRabbitTokenEvent {
  let setRabbitTokenEventEvent = changetype<setRabbitTokenEvent>(newMockEvent())

  setRabbitTokenEventEvent.parameters = new Array()

  setRabbitTokenEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setRabbitTokenEventEvent.parameters.push(
    new ethereum.EventParam(
      "rabbitToken",
      ethereum.Value.fromAddress(rabbitToken)
    )
  )

  return setRabbitTokenEventEvent
}

export function createsetSuperLikeRatesEventEvent(
  burnrate: BigInt,
  transferrate: BigInt
): setSuperLikeRatesEvent {
  let setSuperLikeRatesEventEvent = changetype<setSuperLikeRatesEvent>(
    newMockEvent()
  )

  setSuperLikeRatesEventEvent.parameters = new Array()

  setSuperLikeRatesEventEvent.parameters.push(
    new ethereum.EventParam(
      "burnrate",
      ethereum.Value.fromUnsignedBigInt(burnrate)
    )
  )
  setSuperLikeRatesEventEvent.parameters.push(
    new ethereum.EventParam(
      "transferrate",
      ethereum.Value.fromUnsignedBigInt(transferrate)
    )
  )

  return setSuperLikeRatesEventEvent
}

export function createsetTimeLimitSuperLikeEventEvent(
  callerAddress: Address,
  timeLimitToRespond: BigInt
): setTimeLimitSuperLikeEvent {
  let setTimeLimitSuperLikeEventEvent = changetype<setTimeLimitSuperLikeEvent>(
    newMockEvent()
  )

  setTimeLimitSuperLikeEventEvent.parameters = new Array()

  setTimeLimitSuperLikeEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setTimeLimitSuperLikeEventEvent.parameters.push(
    new ethereum.EventParam(
      "timeLimitToRespond",
      ethereum.Value.fromUnsignedBigInt(timeLimitToRespond)
    )
  )

  return setTimeLimitSuperLikeEventEvent
}

export function createsetTokenBurnAddressEventEvent(
  callerAddress: Address,
  tokenBurnAddress: Address
): setTokenBurnAddressEvent {
  let setTokenBurnAddressEventEvent = changetype<setTokenBurnAddressEvent>(
    newMockEvent()
  )

  setTokenBurnAddressEventEvent.parameters = new Array()

  setTokenBurnAddressEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setTokenBurnAddressEventEvent.parameters.push(
    new ethereum.EventParam(
      "tokenBurnAddress",
      ethereum.Value.fromAddress(tokenBurnAddress)
    )
  )

  return setTokenBurnAddressEventEvent
}

export function createsetWaitTimeForBreedingEventEvent(
  callerAddress: Address,
  waitForPartnerTime: BigInt
): setWaitTimeForBreedingEvent {
  let setWaitTimeForBreedingEventEvent =
    changetype<setWaitTimeForBreedingEvent>(newMockEvent())

  setWaitTimeForBreedingEventEvent.parameters = new Array()

  setWaitTimeForBreedingEventEvent.parameters.push(
    new ethereum.EventParam(
      "callerAddress",
      ethereum.Value.fromAddress(callerAddress)
    )
  )
  setWaitTimeForBreedingEventEvent.parameters.push(
    new ethereum.EventParam(
      "waitForPartnerTime",
      ethereum.Value.fromUnsignedBigInt(waitForPartnerTime)
    )
  )

  return setWaitTimeForBreedingEventEvent
}

export function createsuperLikeEvent(
  fromNftId: BigInt,
  fromNftAddress: Address,
  fromOwnerAddress: Address,
  toNftId: BigInt,
  toNftAddress: Address,
  toOwnerAddress: Address,
  time: BigInt,
  costForSuperLike: BigInt,
  seed: BigInt,
  superLikeNFTId: BigInt
): superLike {
  let superLikeEvent = changetype<superLike>(newMockEvent())

  superLikeEvent.parameters = new Array()

  superLikeEvent.parameters.push(
    new ethereum.EventParam(
      "fromNftId",
      ethereum.Value.fromUnsignedBigInt(fromNftId)
    )
  )
  superLikeEvent.parameters.push(
    new ethereum.EventParam(
      "fromNftAddress",
      ethereum.Value.fromAddress(fromNftAddress)
    )
  )
  superLikeEvent.parameters.push(
    new ethereum.EventParam(
      "fromOwnerAddress",
      ethereum.Value.fromAddress(fromOwnerAddress)
    )
  )
  superLikeEvent.parameters.push(
    new ethereum.EventParam(
      "toNftId",
      ethereum.Value.fromUnsignedBigInt(toNftId)
    )
  )
  superLikeEvent.parameters.push(
    new ethereum.EventParam(
      "toNftAddress",
      ethereum.Value.fromAddress(toNftAddress)
    )
  )
  superLikeEvent.parameters.push(
    new ethereum.EventParam(
      "toOwnerAddress",
      ethereum.Value.fromAddress(toOwnerAddress)
    )
  )
  superLikeEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )
  superLikeEvent.parameters.push(
    new ethereum.EventParam(
      "costForSuperLike",
      ethereum.Value.fromUnsignedBigInt(costForSuperLike)
    )
  )
  superLikeEvent.parameters.push(
    new ethereum.EventParam("seed", ethereum.Value.fromUnsignedBigInt(seed))
  )
  superLikeEvent.parameters.push(
    new ethereum.EventParam(
      "superLikeNFTId",
      ethereum.Value.fromUnsignedBigInt(superLikeNFTId)
    )
  )

  return superLikeEvent
}
