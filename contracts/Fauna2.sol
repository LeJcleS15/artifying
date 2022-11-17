// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract Fauna2 is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    string[] faunaUrisIpfs = [
        "https://ipfs.io/ipfs/bafyreidln2luookclion6ka4547gwheurosaxoq46gzodju5swyepq25le/metadata.json",
        "https://ipfs.io/ipfs/bafyreibv2jusmakysaimtencvignllkjqrnk57wmxyacrbrwm3nqxxb7em/metadata.json",
        "https://ipfs.io/ipfs/bafyreibxfwpgxvgnotaguo3ji4bsjy4joi6x7spmll5t6a344oqj6szl6a/metadata.json",
        "https://ipfs.io/ipfs/bafyreiak26kbobfpvufhoimuragjemgeprmuwcmgosor6khusfatktmada/metadata.json",
        "https://ipfs.io/ipfs/bafyreiezfm6dxap367qwbzw27kvxsyxzfnztx5myhx2mwg4q6i62fwyxfq/metadata.json"
    ];

    constructor() ERC721("Fauna2", "F2") {}

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
        require(uri<5, "URI too high");
        string memory newUri = faunaUrisIpfs[uri];
        _setTokenURI(tokenId, newUri);
    }

}