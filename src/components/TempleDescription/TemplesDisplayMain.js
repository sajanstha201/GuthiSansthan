
import { PopDiv } from "../DisplayInfo.js"
import { TemplePdfViewer } from "./TemplePdfViewer.js"
import { TempleImage } from "./TempleImage.js"
import { useIsMobile } from "../../context/ScreenInfo.js"
import { useMediaQuery } from "@mui/material"
export const TempleDispalyMain=()=>{
    const isMobile=useMediaQuery('(max-width:800px)')
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
            imageUrl:'/Pashupathi/images.jpeg',
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
        nepaliFileUrl:''
    })
    const janakiTemple=new Temple({
        imageUrl:'/JanakiTemple/images.jpeg',
        nepaliName:'Janaki Temple',
        englishName:'sajan shrestha',
        nepaliFileUrl:'',
        englishFileUrl:''
    })
    return(
        <div className="w-full flex justify-center">
            <div className={`${isMobile?'flex-col h-[60vh]':'flex-row'} w-[80%]  bg-gray-200 m-2 rounded-lg flex  overflow-x-auto`}>
                <TempleImage templeObject={pashupathiTemple}/>
                <TempleImage templeObject={bouddhanath}/>
                <TempleImage templeObject={patanDurbarSquare}/>
                <TempleImage templeObject={janakiTemple}/>
            </div>
        </div>
    )
}