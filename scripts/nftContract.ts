import { ethers } from "hardhat";

async function main() {
  const Nft = await ethers.getContractFactory("NFT");
  const nft = await Nft.deploy();

  await nft.deployed();

  console.log(`NFT contract deployed to ${nft.address}`);
}

//VALID ADDRESS
//deployed contract : 0x27E34dAB493C42e1F0368FE6f6Ffe72349875308

//MINTED NFTS
//https://testnets.opensea.io/assets/rinkeby/0x27e34dab493c42e1f0368fe6f6ffe72349875308/1
//https://testnets.opensea.io/assets/rinkeby/0x27e34dab493c42e1f0368fe6f6ffe72349875308/0

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
