import * as fs from 'fs';
import { NFTStorage } from 'nft.storage'
import dotenv from 'dotenv'
import { getFilesFromPath } from 'files-from-path'
dotenv.config()

const client = new NFTStorage({token: process.env.NFT_STORAGE_KEY})

async function storeImage(filepath,filename,textname){
    const content = await fs.readFile(filepath, () => {})
    // const imageFile = new File([content], filename, {type: 'image/gif'})
    console.log(content)
    console.log(filepath,filename, textname)
    // console.log(imageFile)
    
    // const metadata = await client.store({
    //     name: `${textname}`,
    //     description: ``,
    //     image: imageFile
    // })
}

async function storeAllImages(){
    fs.readdirSync("src/img").forEach(file => {
        const textname = file.replace(".jpg","").replaceAll("-"," ")
        // console.log(textname)
        // console.log(textname.slice(8))
        const store = storeImage(`.src/img/${file}`,file, textname)
    })
}

storeAllImages()


