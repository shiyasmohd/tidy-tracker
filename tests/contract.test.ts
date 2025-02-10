import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BreedParentA } from "../generated/schema"
import { BreedParentA as BreedParentAEvent } from "../generated/Contract/Contract"
import { handleBreedParentA } from "../src/contract"
import { createBreedParentAEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let parentA = BigInt.fromI32(234)
    let parentB = BigInt.fromI32(234)
    let breedId = BigInt.fromI32(234)
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let ParentANftAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let ParentBNftAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let stratTime = BigInt.fromI32(234)
    let costParentA = BigInt.fromI32(234)
    let isPaying = "boolean Not implemented"
    let newBreedParentAEvent = createBreedParentAEvent(
      parentA,
      parentB,
      breedId,
      user,
      ParentANftAddress,
      ParentBNftAddress,
      stratTime,
      costParentA,
      isPaying
    )
    handleBreedParentA(newBreedParentAEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BreedParentA created and stored", () => {
    assert.entityCount("BreedParentA", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BreedParentA",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "parentA",
      "234"
    )
    assert.fieldEquals(
      "BreedParentA",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "parentB",
      "234"
    )
    assert.fieldEquals(
      "BreedParentA",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "breedId",
      "234"
    )
    assert.fieldEquals(
      "BreedParentA",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BreedParentA",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ParentANftAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BreedParentA",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ParentBNftAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BreedParentA",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "stratTime",
      "234"
    )
    assert.fieldEquals(
      "BreedParentA",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "costParentA",
      "234"
    )
    assert.fieldEquals(
      "BreedParentA",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isPaying",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
