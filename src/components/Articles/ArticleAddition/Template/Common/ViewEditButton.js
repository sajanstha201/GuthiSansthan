export const ViewEditButton=({isPreview,setIsPreview})=>{
    return(
        <>
        <div className="absolute z-100 right-[100%] text-white">
            {!isPreview&&<div className="bg-green-700 cursor-pointer flex border  rounded-md px-2 py-1" onClick={()=>setIsPreview(true)}>View</div>}
            {isPreview&&<div className="bg-gray-700 cursor-pointer flex border  rounded-md px-2 py-1" onClick={()=>setIsPreview(false)}>Edit</div>}
        </div>
        </>
    )
}