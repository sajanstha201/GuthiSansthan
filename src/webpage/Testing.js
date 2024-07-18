import {ImageSlider} from '../components/DisplayInfo'
import pashupathi from '../media/TempleInformation/pashupati.jpeg'
import bouddhnath from '../media/TempleInformation/bouddhanath.jpeg'
import patandurbarsquare from '../media/TempleInformation/patandurbarsquare.png'
import janaki from '../media/TempleInformation/janaki.jpeg'
import { TemplesDisplayMain } from '../components/HomePage/TempleDescription'
import { useState } from 'react'
export const Testing=()=>{
    const [imgSrc,setSrc]=useState()
    const UploadImage=()=>{
        const img=document.getElementById('testing-input').files[0]
        const reader=new FileReader()
        reader.onload=(event)=>{
            console.log(event.target.result)
            const dataArray=event.target.result
            const b=new Blob([dataArray])
            const dataUrl=URL.createObjectURL(b)
            setSrc(dataUrl)
            console.log(dataUrl)
        }
        reader.readAsArrayBuffer(img)
    }
    return(
        <>
        <h1>This is Testing Section</h1>
        <div>
            <div>
                <input id='testing-input' type='file' accept='.png'></input>
                <button onClick={UploadImage}>Clicke me</button>
                <img src={imgSrc} alt='sdflaskj'></img>
            </div>
        </div>
        </>
    )
}