
import { BackAndFrontTemple } from "./BackAndFrontTemple.js"

import { useMediaQuery } from "@mui/material"
export const TemplesDisplayMain=()=>{
    const isMobile=useMediaQuery('(max-width:600px)')
    class Temple{
        constructor({imageUrl,nepaliName,englishName,newariName,mithilaName,nepaliFileUrl,englishFileUrl,newariFileUrl,mithilaFileUrl}){
            this.imageUrl=imageUrl
            this.nepaliName=nepaliName
            this.englishName=englishName
            this.newariName=newariName
            this.mithilaName=mithilaName
            this.nepaliFileUrl=nepaliFileUrl
            this.englishFileUrl=englishFileUrl
            this.newariFileUrl=newariFileUrl
            this.mithilaFileUrl=mithilaFileUrl
        }
    }
    const pashupathiTemple=new Temple(
        {
            imageUrl:'/Pashupathi/images.png',
            nepaliName:'Pashupathinath Temple',
            nepaliFileUrl:'/Bouddhanath/sajan shrestha  MIT  Resume.pdf',
            
        })
    const bouddhanath=new Temple(
        {
            imageUrl:'/Bouddhanath/images.jpeg',
            nepaliName:'Bouddhanath',
            nepaliFileUrl:'/Bouddhanath/sajan shrestha  MIT  Resume.pdf',
        }
    )
    const patanDurbarSquare=new Temple({
        imageUrl:'/PatanDurbarSquare/image.png',
        nepaliName:'Patan Durbar Square',
        englishName:'Patan English',
        newariName:'Patan Newari',
        nepaliFileUrl:'/PatanDurbarSquare/NepaliDescription.txt',
        englishFileUrl:'/PatanDurbarSquare/EnglishDescription.txt',
        newariFileUrl:'/PatanDurbarSquare/NewariDescription.txt'
    })
    const janakiTemple=new Temple({
        imageUrl:'/JanakiTemple/images.png',
        nepaliName:'Janaki Temple',
        englishName:'sajan shrestha',
        nepaliFileUrl:'',
        englishFileUrl:''
    })
    return(
        <div className="w-full h-full flex justify-center">
            <div className={`${isMobile?'flex-col ':'flex-row h-full'} w-full rounded-lg flex  overflow-x-auto`}>
                <BackAndFrontTemple templeObject={pashupathiTemple}/>
                <BackAndFrontTemple templeObject={bouddhanath}/>
                <BackAndFrontTemple templeObject={patanDurbarSquare}/>
                <BackAndFrontTemple templeObject={janakiTemple}/>
            </div>
        </div>
    )
}