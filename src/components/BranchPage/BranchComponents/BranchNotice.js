import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useEditing } from '../../../context/EditingProvider'
export const BranchNotice=({branchName})=>{
    const {isEditing,setIsEditing}=useEditing()
    return(
        <div className=" w-full lg:w-1/3 h-full border-2 border-red-500">
              This is notice section
              {isEditing&&<Link to='/super-user/add-notices' state={{branchName}} className='w-full h-fit flex items-center justify-center'>
                <FontAwesomeIcon icon={faPlus} className='p-5 m-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer no-underline' size='3x'/>
            </Link>}
        </div>
    )
}