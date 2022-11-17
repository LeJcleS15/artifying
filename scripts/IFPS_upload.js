import * as fs from 'fs';
import { NFTStorage } from 'nft.storage'
import dotenv from 'dotenv'
import { Blob } from 'buffer'

dotenv.config()

const client = new NFTStorage({token: process.env.NFT_STORAGE_KEY})

async function storeImage(filepath,filename,textname){
    const content = fs.readFileSync(filepath)
    console.log(typeof content)
    // const image = new File([content], filename, {type: 'image/gif'})
    const blob = new Blob([content],{type: 'image/gif'});
    // const image = fs.writeFileSync(filepath, content);

    console.log(typeof blob)
    
    // const metadata = await client.store({
    //     name: `${textname}`,
    //     description: `Image description here`,
    //     image: blob
    // })

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

