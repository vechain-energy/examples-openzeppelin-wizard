const hre = require("hardhat");

async function main() {

  await hre.run('compile');
  const [deployer] = await hre.thor.getSigners()
  const deployerAddress = await deployer.getAddress()

  const MyToken = await hre.thor.getContractFactory("MyToken");
  const myToken = await MyToken.deploy();

  await myToken.deployed();
  console.log("MyToken deployed to:", myToken.address);

  const name = await myToken.name()
  const balance = await myToken.balanceOf(deployerAddress)
  console.log(`minted ${hre.ethers.utils.formatEther(balance)} of ${name} to myself at ${deployerAddress}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });