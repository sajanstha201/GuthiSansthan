import { createContext, useContext, useState } from "react";
const homePageContext=createContext()
const aboutUsPageContext=createContext()
const contactUsPageContext=createContext()
const servicePageContext=createContext()
export const PageInfoProvider=({children})=>{
    const [homePage,setHomePage]=useState({})
    const [aboutUsPage,setAboutUsPage]=useState({})
    const [contactUsPage,setContactUsPage]=useState({})
    const [servicePage,setServicePage]=useState({})
    return(
        <>
        <homePageContext.Provider value={{homePage,setHomePage}}>
            <aboutUsPageContext.Provider value={{aboutUsPage,setAboutUsPage}}>
                <contactUsPageContext.Provider value={{contactUsPage,setContactUsPage}}>
                    <servicePageContext.Provider value={{servicePage,setServicePage}}>
                    {children}
                    </servicePageContext.Provider>
                </contactUsPageContext.Provider>
            </aboutUsPageContext.Provider>
        </homePageContext.Provider>  
        </>
    )
}
export const useHomePage=()=>useContext(homePageContext)
export const useAboutUsPage=()=>useContext(aboutUsPageContext)
export const useContactUsPage=()=>useContext(contactUsPageContext)
export const useServicePage=()=>useContext(servicePageContext)