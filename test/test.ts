import { expect } from "chai";
import { ethers } from "hardhat";

describe("Ares3Network", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("Ares3Network");

    const instance = await ContractFactory.deploy();
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("Ares3 Network");
  });
});
