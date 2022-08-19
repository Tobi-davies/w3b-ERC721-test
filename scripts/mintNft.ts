import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x27E34dAB493C42e1F0368FE6f6Ffe72349875308";
  const nft = await ethers.getContractAt("INft", contractAddress);
  let result = await nft.mintNft(
    "0xB6E63c79B4dF12DF083f6Ca8AD56D655b63653b7",
    "ipfs://QmWi5RRVkawMsMGF5FcvTvYFNN6zSDkWavqBqRN22ootNb"
  );

  console.log(result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//VALID ADDRESS
//deployed contract : 0x27E34dAB493C42e1F0368FE6f6Ffe72349875308

//MINTED NFTS
//https://testnets.opensea.io/assets/rinkeby/0x27e34dab493c42e1f0368fe6f6ffe72349875308/1
//https://testnets.opensea.io/assets/rinkeby/0x27e34dab493c42e1f0368fe6f6ffe72349875308/0

//Please ignore
//second deployed contract : 0x135BCe56C719ACd461Ca14A753b48b7E0B7C3592
