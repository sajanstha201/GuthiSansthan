import { createContext, useContext, useState } from "react";

const currentUserContext=createContext()
export const CurrentUserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState('normal')
    return(
        <currentUserContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </currentUserContext.Provider>
    )
}
export const useCurrentUser=()=>useContext(currentUserContext)