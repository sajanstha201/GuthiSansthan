import { useEditing } from "../../context/EditingProvider"
import AddBranches from "./AddBranches"
import { BranchInstance } from "./BranchInstance"
import img from '../../media/TempleInformation/Bouddhanath/images.jpeg'
export const BranchMainPage=()=>{
    const {isEditing,setIsEditing}=useEditing()
    return(
        <div className="w-full flex flex-wrap items-center justify-center px-[10%] gap-5">
            <BranchInstance imgUrl={img} name={'Kathmandu'}/>
            <BranchInstance imgUrl={img} name={'Bhaktapur'}/>
            <BranchInstance imgUrl={img} name={'Laltipur'}/>
            <BranchInstance imgUrl={img} name={'Janakpur'}/>
            {isEditing&&<AddBranches/>}
        </div>
    )
}