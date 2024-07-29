import { useState } from "react"
import { Link } from "react-router-dom"
export const InstanceNotice=({desc,date,link})=>{
    const [data,setData]=useState('notice section')
    return(
        <>
        <Link to='/show-notice' state={{data}} className="no-underline">
            <div className="flex justify-start">
            <li className="font-semibold text-white  text-lg">This is Instance Notice</li>
            </div>
        </Link>

        </>
    )
}