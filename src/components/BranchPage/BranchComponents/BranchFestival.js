import { useEditing } from "../../../context/EditingProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { AddParva } from "../../Parva/AddParva"
import {useSelector} from 'react-redux'
export const BranchFestival=({branchName})=>{
    const {isEditing,setIsEditing}=useEditing()
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const fetchBranchAllParva=()=>{
        console.log('fetcing alll parva of'+branchName)
    }
    return(
        <>
            <div className="w-full border-2 border-cyan-400 rounded-md h-fit flex items-center justify-center flex-col">this is branch festival section
                {isEditing&&<AddParva fetchAllParva={fetchBranchAllParva} parvaAddingUrl={baseUrl}/>}
            </div>
        </>

    )
}