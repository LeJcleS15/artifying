import fs from 'fs';
import { NFTStorage } from 'nft.storage'
import dotenv from 'dotenv'
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
        description: `${textname.slice(0,7)} represents the environmental impact of the holder of this NFT. By planting trees the holder has a positive impact on the environment. Current progress is "${textname.slice(8)}" and ${treesPlanted(textname)} trees have been planted.`,
        image: imageFile,
        attributes: [
            {
                "trait_type": "Progress", 
                "value": `${textname.slice(8)}`
              },
              {
                "trait_type": "Trees Planted", 
                "value": `${treesPlanted(textname)}`
              }
        ]
    }
    
    const metadata = await client.store(nft)
    console.log(textname, metadata)
}

async function storeAllImages(){
    fs.readdirSync("src/img").forEach(file => {
        const textname = file.replace(".jpg","").replaceAll("-"," ")
        // console.log(textname)
        // console.log(textname.slice(8))
        const store = storeImage(`src/img/${file}`,file, textname)
    })
}

function treesPlanted(textname){
    switch(textname.slice(0,7)){
        case "Fauna 1":
            switch(textname.slice(8)){
                case "Stage 1":
                    return "25.000"
                case "Stage 1":
                    return "50.000"
                case "Complete":
                    return "75.000"
        }
        case "Fauna 2":
            switch(textname.slice(8)){
                case "Stage 1":
                    return "25.000"
                case "Stage 2":
                    return "50.000"
                case "Stage 3":
                    return "75.000"
                case "Stage 4":
                    return "100.000"
                case "Complete":
                    return "125.000"
        }  
        case "Fauna 3":        
            switch(textname.slice(8)){
                case "Stage 1":
                    return "25.000"
                case "Stage 2":
                    return "50.000"
                case "Stage 3":
                    return "75.000"
                case "Stage 4":
                    return "100.000"
                case "Stage 5":
                    return "125.000"
                case "Stage 6":
                    return "150.000"
                case "Stage 7":
                    return "175.000"
                case "Complete":
                    return "200.000"
        }
    }
}



storeAllImages()

