import { ethers } from "hardhat";

async function main() {
  const Nft = await ethers.getContractFactory("NFT");
  const nft = await Nft.deploy();

  await nft.deployed();

  console.log(`NFT contract deployed to ${nft.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
