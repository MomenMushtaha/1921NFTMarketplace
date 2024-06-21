// Importing necessary libraries
const { expect } = require("chai");
const { ethers } = require("hardhat");

// Defining a test suite for the Greeter contract
describe("Greeter", function () {
  // Test case: It should return the new greeting once it's changed
  it("Should return the new greeting once it's changed", async function () {
    // Getting the contract factory for 'Greeter'
    const Greeter = await ethers.getContractFactory("Greeter");

    // Deploying the contract with an initial greeting
    const greeter = await Greeter.deploy("Hello, world!");

    // Waiting for the contract to be deployed
    await greeter.deployed();

    // Asserting that the greet function returns the initial greeting
    expect(await greeter.greet()).to.equal("Hello, world!");

    // Changing the greeting
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // Waiting until the transaction is mined
    await setGreetingTx.wait();

    // Asserting that the greet function returns the new greeting
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});