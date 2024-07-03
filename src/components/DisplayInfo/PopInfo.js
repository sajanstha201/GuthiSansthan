import { useState } from "react"

export const PopInfo=({information})=>{
    return(
        <div className={`flex items-center justify-center min-h-screen bg-gray-100`} id='popInfo-div'>
            <div className="bg-white p-10 rounded shadow relative">
            {information}
            <div onClick={()=>{document.getElementById('popInfo-div').remove()}}className="w-[20px] h-[20px] bg-red-600 absolute right-1 top-1 rounded-full flex items-center justify-center border border-2 border-black">x</div>
            </div>
            
        </div>
    )
}