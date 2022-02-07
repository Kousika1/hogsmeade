const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Shopping", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Shopping = await ethers.getContractFactory("Shopping");
    const shopping = await Shopping.deploy("Hello, world!");
    await shopping.deployed();

    expect(await shopping.greet()).to.equal("Hello, world!");

    const setGreetingTx = await shopping.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await shopping.greet()).to.equal("Hola, mundo!");
  });
});
