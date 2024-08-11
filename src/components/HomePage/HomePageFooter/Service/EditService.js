import axios from "axios";
import { useState } from "react"

export const EditService=(name,detail,img,url)=>{
    const[image,setImage]=useState(img)
    const handelImage =()=>{
        const data = document.getElementById('service-image').files[0];
        if(data){

            setImage(data)
        }
    }
    const handelSubmit=async()=>{
        const editname = document.getElementById('service-').value.trim();
        const editdetail = document.getElementById('service-details').value.trim();
        const editimg = document.getElementById('service-image').files[0];
        const editurl = document.getElementById('service-url').value.trim();
        
        const formData =new FormData();
        formData.append("name",editname)
        formData.append("detail",editdetail)
        formData.append("img",editimg)
        formData.append("url",editurl)
        try{
            const response = await axios.patch("https://ingnepal.org.np/api/services/",{body:formData})
             
        }catch{

        }
    }
    return(
        <>
        <div className="p-4 w-[80%]">
            <div className="flex gap-2">
            <label className="font-semibold">Name</label>
            <input id="service-name" type="text" value={name}/> 
            </div>
            <div className="flex gap-2">
            <label className="font-semibold">Details</label>
            <textarea id="service-details"  value={detail}/> 
            </div>
            <div className="flex gap-2">
            <label className="bg-cover bg-center scale-75" htmlFor="service-image" style={{backgroundImage:`url(${image})`}}> </label>
             <img src={image}/>
            <input type="files" id="service-image" onChange={()=>handelImage()}/> 
            </div>
            <div className="flex gap-2">
            <label className="font-semibold">url</label>
            <input id="service-url" type="url" value={url}/> 
            </div>
            <div className="flex w-full justify-end pr-10">
                <button className="bg-green-600 hover:bg-green-700 px-5 py-2 font-semibold text-lg text-white" onClick={handelSubmit}>Submit</button>
            </div>
        </div>
        
        </>
    )
}acco