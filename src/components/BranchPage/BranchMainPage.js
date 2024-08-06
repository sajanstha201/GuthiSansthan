import { useEditing } from "../../context/EditingProvider"
import AddBranches from "./AddBranches"

export const BranchMainPage=()=>{
    const {isEditing,setIsEditing}=useEditing()
    return(
        <>
            <>This is branch main page</>
            {isEditing&&<AddBranches/>}
        </>
    )
}