import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const BranchHeader=()=>{
    return(
    
       <div className="w-full py-4 px-4 flex-wrap flex-col gap-2">
           <div className="w-full flex flex-col items-center justify-center">
                     <h1>Guthi Sansthan ,kathmandu office</h1>
                     <h4>Golfutar,kathmandu</h4>
                     <p>9861481528,9767845367</p>
           </div>
           <div className="w-full flex items-center justify-between">
                   <div className="flex flex-col">
                     <label htmlFor="head-1" className="rounded-full bg-gray-500 flex flex-col  h-36 w-36 justify-center items-center"> <FontAwesomeIcon icon={faAdd} size="4x" /> <p>Upload Image</p> </label>
                      <input type="file" id="head-1"  className="hidden" />
                    </div>
           </div>
       </div>
    
    )
}