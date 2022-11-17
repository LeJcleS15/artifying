import fs from 'fs';
import { NFTStorage } from 'nft.storage'
import dotenv from 'dotenv'
import { Blob } from 'buffer'
import mime from 'mime'
import path from 'path'
import { File } from 'web3.storage'

dotenv.config()

const client = new NFTStorage({token: process.env.NFT_STORAGE_KEY})

async function storeImage(filepath,filename,textname){
    const content = fs.readFileSync(filepath)
    const type = mime.getType(filepath)
    const imageFile = new File([content], path.basename(filename), {type: type})

    const nft = {
        name: `${textname}`,
        description: `${textname.slice(0,7)} represents the environment impact of the holder of this NFT, current progress: ${textname.slice(8)}.`,
        image: imageFile,
        attributes: [
            {
                "trait_type": "Progress", 
                "value": `${textname.slice(8)}`
              }
        ]
    }
    
    console.log(nft)
    // const metadata = await client.store(nft)

    // console.log(metadata)
}

async function storeAllImages(){
    fs.readdirSync("src/img").forEach(file => {
        const textname = file.replace(".jpg","").replaceAll("-"," ")
        // console.log(textname)
        // console.log(textname.slice(8))
        const store = storeImage(`src/img/${file}`,file, textname)
    })
}

// storeAllImages()

storeImage("src/img/Fauna-1-Complete.jpg", "Fauna-1-Complete.jpg", "Fauna 1 Complete")
storeImage("src/img/Fauna-1-Stage-1.jpg", "Fauna-1-Stage-1.jpg", "Fauna 1 Stage 1")

