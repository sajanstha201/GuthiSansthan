import { useLocation } from "react-router-dom"

export const ShowNotice=()=>{
    const loc=useLocation()
    const {data}=loc.state||{}
    console.log(data)
    return(
        <>
        {data}
        <h1>This is Notice show Section</h1>
        </>
    )
}