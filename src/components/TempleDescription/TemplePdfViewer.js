import { useEffect, useState } from "react";
import { useLangageChoice, useSelectLanguage } from "../../context/LanguageChoice"
import { Worker, Viewer } from "@react-pdf-viewer/core";

import { version as pdfjsVersion } from "pdfjs-dist";
const templeData=require.context('../../media/TempleInformation')
export const TemplePdfViewer=({templeObject})=>{
    const {selectLanguage,setSelectLanguage}=useSelectLanguage()
    const [templeName,setTempleName]=useState(null)
    const [pdfUrl,setPdfUrl]=useState(null)
    useEffect(()=>{
        console.log('switching')
        console.log(selectLanguage)
        switch(selectLanguage){
            case 'English':
                console.log('english')
                setPdfUrl(templeObject.englishFileUrl)
                setTempleName(templeObject.englishName)
                break;
            case 'Newari':
                console.log('newari')
                setPdfUrl(templeObject.newariFileUrl)                
                setTempleName(templeObject.newariName)                
                break;
            case 'Mithila':
                console.log('mithila')
                setPdfUrl(templeObject.mithilaFileUrl)
                setTempleName(templeObject.mithilaName)
                break;
            default:
                console.log('nepali')
                setPdfUrl(templeObject.nepaliFileUrl)                
                setTempleName(templeObject.nepaliName) 
            }
        if(pdfUrl||templeName){
            console.log('deuafdlsjljfsdlkfjlasjfl')
            setPdfUrl(templeObject.nepaliFileUrl)                
            setTempleName(templeObject.nepaliName) 
        }
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