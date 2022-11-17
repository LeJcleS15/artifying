// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract Fauna3 is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    string[] faunaUrisIpfs = [
        "https://ipfs.io/bafyreidperpqa4wgmpbetzj6lepdtkt7qxqdggatffiyt6oasolp6ojita/metadata.json",
        "https://ipfs.io/bafyreidrr2oulgcckaechjn35uh5cdmuznpg3gnfxjddlh2xxolayhgfpq/metadata.json",
        "https://ipfs.io/bafyreifiqtpjqrvtvsg3thgfmgkicjyyfz7qjvqrcyo4gtdcwg5sqaiuoq/metadata.json",
        "https://ipfs.io/bafyreid3w4dry4fpgx457wp5onaf6luorclrg46bzvr6qnu5kjq3miaadu/metadata.json",
        "https://ipfs.io/bafyreia2cmijlhqsahqhji7nb4ghz5oib4s33ktzw4oswyp4q4rfjb3uai/metadata.json",
        "https://ipfs.io/bafyreieayv2ikxeogwvz3wiagut4ubifbtzd5o3f2mqqzfsebde2kijly4/metadata.json",
        "https://ipfs.io/bafyreic2kbor47z67fl54k5wnjhvccduytop2itbn6cg4uiic5usinhw7u/metadata.json",
        "https://ipfs.io/bafyreihry5prrixl4uplnncruntu72dzestqoceenpoekd7zv7ypyv73mi/metadata.json"
    ];

    constructor() ERC721("Fauna3", "F3") {}

    function safeMint(address to) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        string memory defaultUri = faunaUrisIpfs[0];
        _setTokenURI(tokenId, defaultUri);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

     function plantTrees(uint256 tokenId, uint256 uri) public onlyOwner {
        require(uri<8, "URI too high");
        string memory newUri = faunaUrisIpfs[uri];
        _setTokenURI(tokenId, newUri);
    }

}