import './Teams.css'
import { useEffect } from 'react';
import '../../../../App.css'
export const LeftImageSlider=({name,image,desc})=>{
    useEffect(()=>{
        setTimeout(()=>{
            document.getElementById(name).classList.add('translate-pos-x-speaker');
        },200)
    })
    return(
        <>
            <div className="min-h-[200px] w-full flex flex-row p-2 items-center justify-center">
                <div className=' relative h-[80px] w-[80px] md:h-[200px] md:w-[200px] flex items-center justify-center overflow-hidden rounded-full bg-black'><img src={image} className='absolute emerge l'></img></div>
                <div className={` relative h-full w-[80%]   overflow-hidden`}> 
                    <div id={name} className='absolute h-full w-full flex items-center justify-center p-2 left-[-100%]  text-white overflow-auto'>
                        {desc} 
                    </div>
                </div>
            </div>
        </>
    )
}