export const ViewEditButton=({isPreview,setIsPreview,data,setData,name})=>{
    const deleteElement=()=>{
        const oldData={...data};
        delete oldData[name]
        setData(oldData)
    }
    return(
        <>
        <div className="absolute z-100 right-[100%] text-white">
            {!isPreview&&<div className="bg-green-700 cursor-pointer flex border  rounded-md px-2 py-1" onClick={()=>setIsPreview(true)}>View</div>}
            {isPreview&&<div className="bg-gray-700 cursor-pointer flex border  rounded-md px-2 py-1" onClick={()=>setIsPreview(false)}>Edit</div>}
            <div 
                    className={`hover:bg-red-700 bg-red-600 cursor-pointer flex border  rounded-md px-2 py-1`} 
                    onClick={deleteElement}>Remove</div>
        </div>
        </>
    )
}