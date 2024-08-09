import { createContext, useContext, useState } from "react";

const homePageBgContext=createContext()
export const HomePageBgProvider=({children})=>{
    const [homePageBg,setHomePageBg]=useState(null)
    return(
        <>
        <homePageBgContext.Provider value={{homePageBg,setHomePageBg}}>
            {children}
        </homePageBgContext.Provider></>
    )
}
export const useHomePageBg=()=>useContext(homePageBgContext)