import { useEffect } from "react"
import './Teams.css'
export const RightImageSlider=({name,image,desc,post})=>{
    useEffect(()=>{
        setTimeout(()=>{
            document.getElementById(name).classList.add('translate-neg-x-speaker');
        },200)
    })
    return(
        <>
            <div className="py-2 border-b-2 border-white w-full flex flex-row p-2 items-center justify-center">
                <div className={` relative h-full w-[80%]   overflow-hidden`}> 
                    <div id={name} className='absolute h-full w-full flex items-center justify-center p-2 left-[100%]  text-white overflow-auto'>
                    <h1 className='font-bold tracking-wide'>{desc} {name} <span className='text-yellow-600'>{post}</span></h1>  
                    </div>
                </div>
                <div className="flex flex-col">

                {/* <div className=' relative h-[80px] w-[80px] md:h-[200px] md:w-[200px] flex items-center justify-center overflow-hidden rounded-full bg-black'><img src={image} className='absolute emerge '></img></div> */}
                <img src={image} className="rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px] emerge "/>
                <h1 className='text-2xl font-bold text-yellow-500'>{post}</h1>
                <h1 className='text-lg font-semibold text-white'>{name}</h1>
                </div>
            </div>
        </>
    )
}