import { useMediaQuery } from "@mui/material"
import { createContext, useContext, useState } from "react"
const mobileContext=createContext()
export const ScreenProvider=({children})=>{
    const [isMobile,setIsMobile]=useState(useMediaQuery('(max-width:800px)'))
    return(
            <mobileContext.Provider value={{isMobile,setIsMobile}}>
            {children}
            </mobileContext.Provider>
    )
}
export const useIsMobile=()=>useContext(mobileContext)