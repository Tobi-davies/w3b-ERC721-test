// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


interface INft{
function mintNft(address to, string memory tokenURI)
        external  
        returns (uint256);
}