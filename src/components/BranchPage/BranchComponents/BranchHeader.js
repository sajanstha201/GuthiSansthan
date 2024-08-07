import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const BranchHeader=()=>{
  const [img1,setImg1] = useState();
  const [img2,setImg2] = useState();
  const handelimg1=()=>{
     const file = document.getElementById('branch-addition-head-1').files[0];
     const reader = new FileReader();
     reader.onload=(e)=>{
       const url = URL.createObjectURL(new Blob([e.target.result]));
       setImg1(url)
       
      }
      reader.readAsArrayBuffer(file)
  }
  const handelimg2=()=>{
     const file = document.getElementById('branch-addition-head-2').files[0];
     const reader = new FileReader();
     reader.onload=(e)=>{
       const url1 = URL.createObjectURL(new Blob([e.target.result]));
       setImg2(url1)
       
      }

      reader.readAsArrayBuffer(file)
  }
  const handleSubmit=()=>{
    
  }
    return(
    
       <div className="w-full py-4 px-4 flex-wrap flex-col gap-2 border-b-4 mb-3 border-red-500">
           <div className="w-full flex flex-col items-center justify-center">
                     <h1>Guthi Sansthan ,kathmandu office</h1>
                     <h4>Golfutar,kathmandu</h4>
                     <p>9861481528,9767845367</p>
           </div>
           <div className="w-full flex  items-center justify-between">
                   <div className="flex w-1/2 md:w-1/4 items-start md:justify-center gap-2 flex-col  md:items-center">
                        {img1&&<div className="px-2 py-1 bg-red-700 text-white rounded-md hover:bg-red-800 cursor-pointer"
                        onClick={()=>setImg1()}
                        >Remove</div>}
                      <div className="relative rounded-full bg-gray-900 bg-cover bg-center flex flex-col h-24 w-24 md:h-36 md:w-36 justify-center items-center overflow-hidden">
                          
                          {!img1 && <>
                          <label htmlFor="branch-addition-head-1"> 
                              <FontAwesomeIcon icon={faAdd} size="4x" className="text-white"/> 
                              </label>
                            </>}
                            {img1&&
                            <>
                            
                            <img src={img1} className=""></img>
                            </>
                            }
                      </div>

                      <input type="file" id="branch-addition-head-1"  className="hidden" onChange={()=>handelimg1()}/>
                      <input type="text" className="font-semibold p-2 text-yellow-400 text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>
                      <input type="text" className="font-semibold p-2 text-black text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>               
                    </div>
                          <div className="px-3 py-2 bg-green-700 hover:bg-green-800 rounded-md cursor-pointer" onClick={handleSubmit}>Save</div>

                    <div className="flex w-1/2 md:w-1/4 items-start md:justify-center gap-2 flex-col  md:items-center  ">
                        {img2&&<div className="px-2 py-1 bg-red-700 text-white rounded-md hover:bg-red-800 cursor-pointer"
                        onClick={()=>setImg2()}
                        >Remove</div>}
                      <div className="rounded-full bg-gray-900 bg-cover bg-center flex flex-col h-24 w-24 md:h-36 md:w-36 justify-center items-center overflow-hidden">
                          {!img2 && <>
                          <label htmlFor="branch-addition-head-2"> 
                              <FontAwesomeIcon icon={faAdd} size="4x" className="text-white"/> 
                              </label>
                            </>}
                            {img2&&<img src={img2} className=""></img>}
                      </div>

                          <input type="file" id="branch-addition-head-2"  className="hidden" onChange={()=>handelimg2()}/>
                          <input type="text" className="font-semibold p-2 text-yellow-400 text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>
                          <input type="text" className="font-semibold p-2 text-black text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>               
                        </div>
           </div>
       </div>
    
    )
}