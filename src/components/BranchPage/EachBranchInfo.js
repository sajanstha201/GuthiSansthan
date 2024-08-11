import { useState } from "react"
import { BranchArticles } from "./BranchComponents/BranchArticles"
import { BranchFestival } from "./BranchComponents/BranchFestival"
import { BranchHeader } from "./BranchComponents/BranchHeader"
import { BranchNotice } from "./BranchComponents/BranchNotice"
import { useMediaQuery } from "@mui/material"
import { useLocation } from "react-router-dom"

export const EachBranchInfo=()=>{
    const isMobile = useMediaQuery('(max-width:800px)');  
    const [section,setSection]=useState('article')
    const loc=useLocation()
    return(
        <div className="flex flex-col items-center gap-3">
            <BranchHeader branchName={loc.state}/>
         <div className="w-full">
                <div className="w-full py-4 flex justify-start bg-gray-600/80  gap-8 pl-16 shadow-sm blur-border">
                    <button onClick={()=>setSection('article')} className={`font-bold border-b-2  hover:border-red-600 transition-all duration-200 ease-linear text-white text-xl ${section==='article' ? ' border-red-600 ': 'border-none'} `}>Article</button>
                    <button onClick={()=>setSection('notice')} className={`font-bold border-b-2  hover:border-red-600 transition-all duration-200 ease-linear text-white text-xl ${section==='notice' ? ' border-red-600 ': 'border-none'} `}>Notices</button>
                    <button onClick={()=>setSection('festival')} className={`font-bold border-b-2  hover:border-red-600 transition-all duration-200 ease-linear text-white text-xl ${section==='festival'? ' border-red-600 ': 'border-none'} `}>Festivals</button>
                </div>
                <div className="w-full flex items-center justify-center">
                    {section==='article'&&<BranchArticles branchName={loc.state}/>}
                    {section==='notice'&&<BranchNotice branchName={loc.state}/>}
                    {section==='festival'&&<BranchFestival branchName={loc.state}/>}
                </div>
         </div>
        </div>
    )
}