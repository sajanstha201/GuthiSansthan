import { Link } from "react-router-dom"
export const BranchInstance=({imgUrl,name})=>{
    return(
        <>
        <Link to='/branche-full-info' state={{'name':name,'img':imgUrl}} className="relative flex items-center justify-center border border-black rounded-md w-[150px] md:w-[300px] h-[100px] md:h-[200px] bg-cover bg-center hover:scale-105 m-1 transition-all duration-300 cursor-pointer  "
            style={{backgroundImage:`url(${imgUrl})`}}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                 <div className="text-white font-bold text-[15px] md:text-[30px] z-10">{name}</div>
        </Link>
        </>
    )
}