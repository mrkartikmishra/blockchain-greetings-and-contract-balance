require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_NODE_URL,
      accounts: [process.env.WALLTE_PRIVATE_KEY],
    },
  },
};
