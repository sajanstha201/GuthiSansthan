import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useEditing } from "../../../context/EditingProvider"

export const BranchHeader=({branchName})=>{
  const [isHeaderEditing,setIsHeaderEditing]=useState(false)
  const [img1,setImg1] = useState();
  const {isEditing,setIsEditing}=useEditing()
  const [branchDetail,setBranchDetail]=useState({'name':branchName,'address':'','contact':'','branchHeadName':'','branchHeadPost':''})
  const handelimg1=()=>{
     const file = document.getElementById('branch-addition-head-1').files[0];
     const reader = new FileReader();
     reader.onload=(e)=>{
       const url = URL.createObjectURL(new Blob([e.target.result]));
       setImg1(url)
       
      }
      reader.readAsArrayBuffer(file)
  }
 const handleChange=(key,e)=>{
  setBranchDetail(prevData=>({...prevData,[key]:e.target.value}))
 }
  const handleSubmit=()=>{
    
  }
    return(
       <div className="relative w-full py-4 px-4 flex-wrap flex-col gap-2 border-b-4 mb-3 border-red-500">
        {isEditing&&<>
        <div className="top-1 left-1 absolute flex flex-col gap-1">
          {!isHeaderEditing&&<div onClick={()=>setIsHeaderEditing(true)} className="py-1 px-3 bg-gray-500 rounded-md cursor-pointer  hover:bg-gray-600 text-white">Edit</div>}
          {isHeaderEditing&&<div onClick={()=>setIsHeaderEditing(false)} className="py-1 px-3 bg-green-500 rounded-md cursor-pointer  hover:bg-green-600 text-white">View</div>}
          {!isHeaderEditing&&<div className=" px-3 py-1 bg-green-700 text-white¯ hover:bg-green-800 rounded-md cursor-pointer" onClick={handleSubmit}>Save</div>}
        </div>

          <div className={`${isHeaderEditing?'':'hidden'}`}>
            <div className="w-full flex flex-col items-center justify-center">
              <input  placeholder="Office Name" value={branchDetail.name} className="border rounded-md m-1 p-2 border-black" onChange={(e)=>handleChange('name',e)}></input>
              <input  placeholder="Office Address" value={branchDetail.address}className="border rounded-md m-1 p-2 border-black" onChange={(e)=>handleChange('address',e)}></input>
              <input  placeholder="Contact Number" value={branchDetail.contact}className="border rounded-md m-1 p-2 border-black" onChange={(e)=>handleChange('contact',e)}></input>
           </div>
           <div className="w-full flex  items-start">
                   <div className="flex w-1/2 md:w-1/4  md:justify-center gap-2 flex-col  md:items-center">
                        {img1&&<div className="px-2 py-1 bg-red-700 text-white rounded-md hover:bg-red-800 cursor-pointer"
                        onClick={()=>setImg1()}
                        >Remove</div>}
                      <div className="relative rounded-full bg-gray-900 bg-cover bg-center flex flex-col h-24 w-24 md:h-36 md:w-36 justify-center items-center overflow-hidden">
                          
                          {!img1 && <>
                            <label htmlFor="branch-addition-head-1" className="hover:scale-105 cursor-pointer"> 
                                <FontAwesomeIcon icon={faAdd} size="4x" className="text-white"/> 
                            </label>
                          </>}
                          {img1&&<><img src={img1} className=""></img></>}
                      </div>
                      <input type="file" accept='.png,.jpg,.jpeg' id="branch-addition-head-1"  className="hidden" onChange={()=>handelimg1()}/>
                      <input type="text" onChange={(e)=>handleChange('branchHeadName',e)} className=" p-2 text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>
                      <input type="text" onChange={(e)=>handleChange('branchHeadPost',e)} className="p-2  text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>               
                    </div>
           </div>
                               

          </div>
        </>}

          {!isHeaderEditing&&
          <>
            <div className="w-full flex flex-col items-center justify-center">
            <h1>{branchDetail.name}</h1>
            <h4>{branchDetail.address}</h4>
            <p>{branchDetail.contact}</p>
           </div>
           <div className="w-full flex  items-center justify-between">
                   <div className="flex w-1/2 md:w-1/4  md:justify-center gap-2 flex-col  md:items-center">
                      <div className="relative rounded-full bg-gray-900 bg-cover bg-center flex flex-col h-24 w-24 md:h-36 md:w-36 justify-center items-center overflow-hidden">
                          <img src={img1} className=""></img>
                      </div>
                      <h4>{branchDetail.branchHeadName}</h4>
                      <h4>{branchDetail.branchHeadPost}</h4>            
                    </div>
           </div>
          </>}

       </div>
    
    )
}