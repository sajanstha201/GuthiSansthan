import { faAdd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const BranchHeader=()=>{
  const [img1,setImg1] = useState();
  const [img2,setImg2] = useState();
  const handelimg1=()=>{
     const file = document.getElementById('head-1').files[0];
     const reader = new FileReader();
     reader.onload=(e)=>{
       const url = URL.createObjectURL(new Blob([e.target.result]));
       setImg1(url)
       
      }

      reader.readAsArrayBuffer(file)
  }
  const handelimg2=()=>{
     const file = document.getElementById('head-2').files[0];
     const reader = new FileReader();
     reader.onload=(e)=>{
       const url1 = URL.createObjectURL(new Blob([e.target.result]));
       setImg2(url1)
       
      }

      reader.readAsArrayBuffer(file)
  }
    return(
    
       <div className="w-full py-4 px-4 flex-wrap flex-col gap-2 border-b-4 mb-3 border-red-500">
           <div className="w-full flex flex-col items-center justify-center">
                     <h1>Guthi Sansthan ,kathmandu office</h1>
                     <h4>Golfutar,kathmandu</h4>
                     <p>9861481528,9767845367</p>
           </div>
           <div className="w-full flex  items-center justify-between">
                   <div className="flex w-1/2 md:w-1/4 items-start md:justify-center gap-2 flex-col  md:items-center  ">
                     <label htmlFor="head-1" className="rounded-full bg-gray-500 bg-cover bg-center flex flex-col h-24 w-24 md:h-36 md:w-36 justify-center items-center" style={{backgroundImage:`url(${img1})`}}> {!img1 && <>
                     
                      <FontAwesomeIcon icon={faAdd} size="4x" /> <p>Upload Image</p>
                      </>
                      }
                       </label>
                      <input type="file" id="head-1"  className="hidden" onChange={()=>handelimg1()}/>
                      <input type="text" className="font-semibold text-yellow-400 text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>
                      <input type="text" className="font-semibold text-black text-xl w-fit border border-cyan-300 rounded-md outline-none" placeholder="Person Post"/>               
                    </div>
                   <div className="flex w-1/2 md:w-1/4 justify-center flex-col items-center gap-2  ">
                     <label htmlFor="head-2" className="rounded-full bg-gray-500 bg-cover bg-center flex flex-col h-24 w-24 md:h-36 md:w-36 justify-center items-center" style={{backgroundImage:`url(${img2})`}}> {!img2 && <>
                     
                      <FontAwesomeIcon icon={faAdd} size="4x" /> <p>Upload Image</p>
                      </>
                      }
                       </label>
                      <input type="file" id="head-2"  className="hidden" onChange={()=>handelimg2()}/>
                      <input type="text" className="font-semibold text-yellow-400 text-xl w-fit px-3" placeholder="Person Post"/>
                      <input type="text" className="font-semibold text-black text-xl w-fit px-3" placeholder="Person Post"/>
               

                    </div>
           </div>
       </div>
    
    )
}