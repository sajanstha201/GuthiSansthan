import { useState } from "react"
import logo1 from '../../../../media/Teams/logo.gif'
export const AddTeam=()=>{
    const [person1,setPerson1]=useState({
        name:'',
        post:'',
        image:''
    })
    const [person2,setPerson2]=useState({
        name:'',
        post:'',
        image:''
    })
    return(
        <>
        <div className="py-2 w-full flex flex-row p-2 items-center justify-center bg-cyan-400/30 border-b-2 border-white">
                <div className='flex flex-col justify-center'>
                <label className="rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px] bg-gray-400"></label>
                 <input type="file" accept=".png,.jpeg,.jpg" src={person1.image}></input>
                <h1 className='text-2xl font-bold text-yellow-500'>{person1.post}</h1>
                <h1 className='text-lg font-semibold text-white'>{person1.name}</h1>
                </div>
                <div className={` relative h-full w-[70%] flex justify-center items-center   overflow-hidden`}> 
                     <img src={logo1} height={250} width={250} className='   '/>
                     
                </div>
                <div className='flex flex-col justify-center'>

                <label className="rounded-full h-[80px] w-[80px] md:h-[200px] md:w-[200px] bg-gray-400"></label>
                 <input type="file" accept=".png,.jpeg,.jpg" src={person2.image}></input>
                <h1 className='text-2xl font-bold text-yellow-500'>{person2.post}</h1>
                <h1 className='text-lg font-semibold text-white'>{person2.name}</h1>
                        </div>
        </div>
        </>
    )
}