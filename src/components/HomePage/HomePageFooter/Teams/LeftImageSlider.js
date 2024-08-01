import './Teams.css'
import { useEffect } from 'react';
import '../../../../App.css'
export const LeftImageSlider=({name,image,desc,post})=>{
    useEffect(()=>{
        setTimeout(()=>{
            document.getElementById(name).classList.add('translate-pos-x-speaker');
        },200)
    })
    return(
        <>
            <div className="py-2 w-full flex flex-row p-2 items-center justify-center bg-cyan-400/30 border-b-2 border-white">
                <div className='flex flex-col justify-center'>

                <div className='  relative h-[80px] w-[80px] md:h-[200px] md:w-[200px] flex flex-col items-center justify-center overflow-hidden rounded-full bg-black'><img src={image} className='absolute emerge l'></img></div>
                 
                <h1 className='text-2xl font-bold text-yellow-500'>{post}</h1>
                <h1 className='text-lg font-semibold text-white'>{name}</h1>
                </div>
                <div className={` relative h-full w-[80%]   overflow-hidden`}> 
                    <div id={name} className='absolute text-4xl font-semibold h-full w-full flex-col flex items-center justify-center p-2 left-[-100%]  text-white overflow-auto'>
                      <h1 className='font-bold tracking-wide'>{desc} {name} <span className='text-yellow-600'>{post}</span></h1>  
                    </div>
                </div>
            </div>
        </>
    )
}