import { createContext, useContext, useState } from "react";

const editingContext=createContext()
export const EditingProvider=({children})=>{
    const [isEditing,setIsEditing]=useState(true)
    return(
        <>
        <editingContext.Provider value={{isEditing,setIsEditing}}>
            {children}
        </editingContext.Provider></>
    )
}
export const useEditing=()=>useContext(editingContext)