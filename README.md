# Artifying Impact

This project features dNFTs which visualizes the proof of impact created with the choosen carbon theme for eg: Fauna Series (trees planted), Ocean Seies (Cleaning Oceans) and more. As we progress though the environmental goals the images of the dNFTs will change. 

For now we are manually changing the images because we lack on-chain Proof of Impact to verify the IRL environmental impact. In the future we will implement Chainlink Keepers/upkeep and Chainlink Any API. This will allow us to collect real life data into our smart contracts. This data is then used to check if the dNFT should change the image.

For the file storage we used NFT.storage API. A script is created 'IPFS_upload'. Here we upload our images and metadata to IPFS. In this example we used Fauna (planting trees). There are 3 collections within Fauna, all have different stages that reflect IRL environmental impact.

