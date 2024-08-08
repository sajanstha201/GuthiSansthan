import { useState } from "react"
import { BranchArticles } from "./BranchComponents/BranchArticles"
import { BranchFestival } from "./BranchComponents/BranchFestival"
import { BranchHeader } from "./BranchComponents/BranchHeader"
import { BranchNotice } from "./BranchComponents/BranchNotice"
import { useMediaQuery } from "@mui/material"

export const EachBranchInfo=()=>{
    const isMobile = useMediaQuery('(max-width:800px)');  
    const [isArticle,setArtical]=useState(true)
    
    return(
        <div className="flex flex-col items-center gap-3">
            <BranchHeader/>
          {!isMobile ?
          <div className="flex flex-col items-center md:flex-row">
              <BranchArticles/>
            <BranchNotice/>
            </div> :

            
         <div className="w-full">
                   <div className="w-full py-2 flex justify-start bg-gray-400/80  gap-4 pl-16">
                       <button onClick={()=>setArtical(true)} className={`font-bold border-b-2  hover:border-red-600 transition-all duration-200 ease-linear ${isArticle ? ' border-red-600 ': 'border-none'} `}>Article</button>
                       <button onClick={()=>setArtical(false)} className={`font-bold border-b-2  hover:border-red-600 transition-all duration-200 ease-linear ${!isArticle ? ' border-red-600 ': 'border-none'} `}>Notices</button>
                   </div>
                   <div className="w-full">
                        {isArticle ? <BranchArticles/> : <BranchNotice/>}
                   </div>
         </div>
          }
            <BranchFestival/>
        </div>
    )
}