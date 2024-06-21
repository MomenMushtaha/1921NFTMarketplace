// Importing the hardhat-waffle plugin
require("@nomiclabs/hardhat-waffle");

// Exporting the Hardhat configuration
// This configuration object is used by Hardhat to set up your development environment
module.exports = {
  // Specifying the version of Solidity that the smart contracts are written in
  solidity: "0.8.4",

  // Configuring the networks that Hardhat will connect to
  networks: {
    // Configuring the Rinkeby test network
    rinkeby: {
      // The URL of the Ethereum node to connect to
      // This is typically provided by a service like Alchemy or Infura
      url: 'https://eth-rinkeby.alchemyapi.io/v2/cZTxqnlB02OiRZQYCVIuj3U3LR20_MbV',

      // The list of accounts that Hardhat will use to deploy contracts
      // These are specified as private keys, and should NEVER be committed to version control
      // In a real-world project, these should be loaded from environment variables or a secure secret store
      accounts: [
        'fc47f40a84f71488a356a43caa05512743609e1df51e866a4d196496f5db92a7',
      ],
    }
  }
};



