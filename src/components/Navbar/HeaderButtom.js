import { Link } from "react-router-dom"
export const HeaderButtom=()=>{
    return(
        <div className="w-full  flex flex-row justify-between items-center p-5 bg-gray-400">
        <Link to='/'> 
        <h2>LOGO</h2>
        </Link>
        <div>
        <Link to='/contact-us'>Contact us</Link>
        </div>
        hvivkkvv
    </div>
    )
}