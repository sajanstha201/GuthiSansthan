import { faAdd, faClose, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useEditing } from "../../../context/EditingProvider"

export const BranchHeader=({branchName,branchImg})=>{
  const [isHeaderEditing,setIsHeaderEditing]=useState(false)
  const [branchImage,setBranchImage]=useState(branchImg)
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
       <div className="relative w-full py-4 px-4 flex-wrap flex-col gap-2 mb-3">
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
                   <div className="flex w-1/2  justify-center gap-2 flex-col  items-center">
                        {img1&&<div className="px-2 py-1 bg-red-700 text-white rounded-md hover:bg-red-800 cursor-pointer"
                        onClick={()=>setImg1()}
                        >Remove</div>}
                      <div className="relative rounded-full bg-gray-600 bg-cover bg-center flex flex-col h-24 w-24 md:h-36 md:w-36 justify-center items-center m-1 hover:scale-105 transition-all duration-200 overflow-hidden ">
                          
                          {!img1 && <>
                            <label htmlFor="branch-addition-head-1" className="hcursor-pointer"> 
                                <FontAwesomeIcon icon={faAdd} size="4x" className="text-white"/> 
                            </label>
                          </>}
                          {img1&&<><img src={img1} className=""></img></>}
                      </div>
                      <input type="file" accept='.png,.jpg,.jpeg' id="branch-addition-head-1"  className="hidden" onChange={()=>handelimg1()}/>
                      <input type="text" onChange={(e)=>handleChange('branchHeadName',e)} className=" p-2 text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>
                      <input type="text" onChange={(e)=>handleChange('branchHeadPost',e)} className="p-2  text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>               
                    </div>
                    <div className="flex  w-1/2 items-center justify-center ">
                      <div className=" relative flex items-center justify-center rounded-md overflow-hidden w-[150px] h-[100px] md:w-[300px] md:h-[200px] bg-cover bg-center m-1 hover:scale-105 transition-all duration-200" 
                        style={{backgroundImage:`url(${branchImage})`}}>
                          {branchImage&&<FontAwesomeIcon icon={faClose} className="absolute top-1 right-1 items-center justify-center text-red-700 cursor-pointer" size="2x" onClick={()=>setBranchImage()}></FontAwesomeIcon>}
                          {!branchImage&&<label htmlFor="branch-new-image"className="w-full h-full bg-gray-500 flex items-center justify-center">
                              <FontAwesomeIcon icon={faPlus} size="3x" className="text-white"/>
                          </label>}
                          <input id="branch-new-image" className="hidden" type="file" accept=".png,.jpg,.jpeg" onChange={(e)=>setBranchImage(URL.createObjectURL(e.target.files[0]))}></input>
                      </div>      
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
           <div className="w-full flex  items-center justify-center">
                   <div className="flex w-1/2  justify-center gap-2 flex-col  items-center">
                      <div className="relative rounded-full bg-gray-900 bg-cover bg-center flex flex-col h-24 w-24 md:h-36 md:w-36 justify-center items-center overflow-hidden">
                          <img src={img1} className=""></img>
                      </div>
                      <h3>{branchDetail.branchHeadName}</h3>
                      <h4>{branchDetail.branchHeadPost}</h4>            
                    </div>
                    <div className="flex w-1/2 items-center justify-center ">
                      <div className="flex items-center justify-center rounded-md overflow-hidden w-[150px] h-[100px] md:w-[300px] md:h-[200px] bg-cover bg-center " 
                        style={{backgroundImage:`url(${branchImage})`}}>
                      </div>      
                    </div>

           </div>
          </>}

       </div>
    
    )
}