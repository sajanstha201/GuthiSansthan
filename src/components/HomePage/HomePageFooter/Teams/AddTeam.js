import { useState } from "react"
import logo1 from '../../../../media/Teams/logo.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCross, faPlus } from "@fortawesome/free-solid-svg-icons";
export const AddTeam=()=>{
    const [image1,setImage1]=useState()
    const [image2,setImage2]=useState()
    const handleImageChange1=(e)=>{
        const reader=new FileReader()
        reader.onload=(e)=>{
            setImage1(URL.createObjectURL(new Blob([e.target.result])))
        }
        console.log(e.target.files[0])
        if(e.target.files[0]) reader.readAsArrayBuffer(e.target.files[0])
    }
    const handleImageChange2=(e)=>{
        const reader=new FileReader()
        reader.onload=(e)=>{
            setImage2(URL.createObjectURL(new Blob([e.target.result])))
        }
        console.log(e.target.files[0])
        if(e.target.files[0]) reader.readAsArrayBuffer(e.target.files[0])
    }
    const uploadPersonDetail=()=>{
        const person1Name=document.getElementById('teams-input-person-1-name')
        const person1Post=document.getElementById('teams-input-person-1-position')
        const person1Image=document.getElementById('tems-input-person-1-image').files[0]
        const person2Name=document.getElementById('teams-input-person-2-name')
        const person2Post=document.getElementById('teams-input-person-2-position')
        const person2Image=document.getElementById('tems-input-person-2-image').files[0]
    }
    return(
        <>
        <div className="py-2 w-full flex flex-row p-2 items-center justify-center bg-cyan-400/30 border-b-2 border-white pb-5">
                <div className='relative flex flex-col justify-center gap-2'>
                {image1&&<FontAwesomeIcon
                            icon={faClose}
                            size={'2x'}
                            className="cursor-pointer absolute top-0 right-0 text-white bg-red-600 rounded-full z-50 h-[30px] w-[30px]"
                            onClick={()=>setImage1('')}

                />}
                {!image1&&<label htmlFor="teams-input-person-1-image"className="rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px] bg-gray-400 flex items-center justify-center text-white font-bold">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                </label>}
                 <input id='teams-input-person-1-image' type="file" accept=".png,.jpeg,.jpg"  className="hidden" onChange={handleImageChange1}></input>
                 {image1&&<img src={image1} className="rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px] "/>}
                 <input id='teams-input-person-1-position' type="text" placeholder="Person Post" className="rounded-md text-[20px] text-black p-2"></input>
                 <input id='teams-input-person-1-name' type="text" placeholder="Person Name" className="rounded-md text-[20px] text-black p-2"></input>
                </div>

                <div className={` relative h-full w-[70%] flex flex-col justify-center items-center   overflow-hidden`}> 
                     {/* <img src={logo1} height={250} width={250} className='   '/> */}
                     <div className="cursor-pointer bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md text-[20px]" onClick={()=>uploadPersonDetail}>Save</div>
                </div>


                <div className='relative flex flex-col justify-center gap-2'>
                {image2&&<FontAwesomeIcon
                            icon={faClose}
                            size={'2x'}
                            className="cursor-pointer absolute top-0 right-0 text-white bg-red-600 rounded-full z-50 h-[30px] w-[30px]"
                            onClick={()=>setImage2('')}

                />}
                {!image2&&<label htmlFor="teams-input-person-2-image"className="rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px] bg-gray-400 flex items-center justify-center text-white font-bold">
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                </label>}
                 <input id='teams-input-person-2-image' type="file" accept=".png,.jpeg,.jpg"  className="hidden" onChange={handleImageChange2}></input>
                 {image2&&<img src={image2} className="rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px] "/>}
                 <input id='teams-input-person-2-position'  type="text" placeholder="Person Post" className="rounded-md text-[20px] text-black p-2"></input>
                 <input id='teams-input-person-2-name'  type="text" placeholder="Person Name" className="rounded-md text-[20px] text-black p-2"></input>
                </div>

        </div>
        </>
    )
}