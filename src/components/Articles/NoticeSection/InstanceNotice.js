import { useState } from "react"
import { Link } from "react-router-dom"
import { ViewEditButton } from "./ViewEditButton"
import { useEditing } from "../../../context/EditingProvider"
export const InstanceNotice=({desc,date,link})=>{
    const [data,setData]=useState('notice section')
    const {isEditing,setIsEditing}=useEditing()
    return(
        <>
        <div className={`relative h-[100px] ${isEditing?'ml-16':''}`}>
            {isEditing&&<ViewEditButton/>}
            <Link to='/show-notice' state={{data}} className={`no-underline`}>
                
                <div className={`  flex justify-start`}>
                <li className="font-semibold text-white  text-lg">This is Instance Notice</li>
                </div>
            </Link>
        </div>


        </>
    )
}