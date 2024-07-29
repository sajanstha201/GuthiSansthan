import { useLocation } from "react-router-dom"

export const ShowArticle=()=>{
    const loc=useLocation()
    const {data}=loc.state||{}
    return(
        <>
        {data}
        <h1>This is Show Article Section</h1>
        </>
    )
}