import { expect } from "chai";
import { ethers } from "hardhat";

describe("Election", function () {
  it("Should deploy the Election contract", async function () {
    const Election = await ethers.getContractFactory("Election");
    const election = await Election.deploy();
    await election.deployed();

    expect(election.address).to.properAddress;
  });

  // Add more tests as needed
});