// Importing the necessary libraries
const hre = require("hardhat");

// Main function that deploys the contract
const main = async () => {
  // Getting the contract factory for 'Transactions'
  const transactionFactory = await hre.ethers.getContractFactory('Transactions');

  // Deploying the contract
  const transactionContract = await transactionFactory.deploy();

  // Waiting for the contract to be deployed
  await transactionContract.deployed();

  // Logging the address where the contract is deployed
  console.log('Transactions deployed to:', transactionContract.address);
};

// Self-invoking async function to handle the promise returned by main()
(async () => {
  try {
    // Attempting to deploy the contract
    await main();

    // Exiting the process with a success status
    process.exit(0);
  } catch (error) {
    // Logging any errors that occur during deployment
    console.error(error);

    // Exiting the process with a failure status
    process.exit(1);
  }
})();