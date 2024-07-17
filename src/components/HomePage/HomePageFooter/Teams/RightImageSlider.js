import { useEffect } from "react"
import './Teams.css'
export const RightImageSlider=({name,image,desc})=>{
    useEffect(()=>{
        setTimeout(()=>{
            document.getElementById(name).classList.add('translate-neg-x-speaker');
        },200)
    })
    return(
        <>
            <div className="min-h-[150px] w-full flex flex-row p-2">
                <div className={` relative h-full w-[70%]   overflow-hidden`}> 
                    <div id={name} className='absolute h-full w-full flex items-center justify-center p-2 left-[100%]  text-white'>
                       {desc}
                    </div>
                </div>
                <div className=' relative h-full w-[30%] flex items-center justify-center overflow-hidden'>
                    <img src={image} className='absolute emerge'></img>
                </div>
            </div>
        </>
    )
}