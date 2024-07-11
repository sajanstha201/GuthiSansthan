import { useEffect, useState } from "react"
export const ImageSlider=({imagesList})=>{
    const [imageIndexSelected,setImageIndexSelected]=useState(0)
    useEffect(()=>{
        const newIndex=(imageIndexSelected+1)%imagesList.length
        setTimeout(()=>setImageIndexSelected(newIndex),1000)
    },[imageIndexSelected])
    return(
        <>
        <div className="h-full w-full flex items-center justify-center bg-black relative">
            {imagesList.map((image,index)=>(
                    <img
                    src={image}
                    alt={image+index}
                    className={`${index===imageIndexSelected?'opacity-100':'opacity-0 w-0 h-0'} max-h-[300px] max-w-[300px] transition-opacity duration-1000 ease-in-out`}
                    ></img>
                ))}
        </div>

        </>
    )
}