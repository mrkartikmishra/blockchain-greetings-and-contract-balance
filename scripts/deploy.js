import hre from "hardhat";

const Greetings = await hre.ethers.getContractFactory("Greetings");
const greetings = await Greetings.deploy();

await greetings.deployed();

console.log(`Greetings contract deployed to ${greetings.address}`);
