import { useEffect, useState } from "react";
import { useLangageChoice, useSelectLanguage } from "../../context/LanguageChoice"
const templeData=require.context('../../media/TempleInformation')
export const TemplePdfViewer=({templeObject})=>{
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const [templeName,setTempleName]=useState(null)
    const [pdfUrl,setPdfUrl]=useState(null)
    useEffect(()=>{
        let objectFileUrl=null
        let objectName=null
        switch(selectLanguage){
            case 'English':
                objectFileUrl=templeObject.englishFileUrl
                objectName=templeObject.englishName
                break;
            case 'Newari':
                objectFileUrl=templeObject.newariFileUrl           
                objectName=templeObject.newariName            
                break;
            case 'Mithila':
                objectFileUrl=templeObject.mithilaFileUrl
                objectName=templeObject.mithilaName
                break;
            default:
                objectFileUrl=templeObject.nepaliFileUrl              
                objectName=templeObject.nepaliName
            }
        if(objectFileUrl&&objectName){
            setPdfUrl(objectFileUrl)
            setTempleName(objectName)
        }
        else{
            objectFileUrl=templeObject.nepaliFileUrl
            objectName=templeObject.nepaliName
            setPdfUrl(templeObject.nepaliFileUrl)                
            setTempleName(templeObject.nepaliName) 
        }
        const fetchData=async()=>{
            const response=await fetch(objectFileUrl)
            const textData=await response.text()
            console.log(textData)
        }
        fetchData();
    },[selectLanguage])
    return(
        <>
        <div>
            <h1>{templeName}</h1>
            <img src={templeData(`.${templeObject.imageUrl}`)} alt={{templeName}+'image'}></img>
            {/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                <div style={{ height: "60vh"}}>
                <Viewer fileUrl={'pdfUrl'} />
                </div>
            </Worker>  */}
        </div>

        </>
    )
}