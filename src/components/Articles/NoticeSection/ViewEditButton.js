export const ViewEditButton=({data,setData,name})=>{
    const deleteElement=()=>{
        console.log('deleting an element')
    }
    return(
        <>
        <div className="absolute z-100 flex-col right-[100%] text-white flex gap-1">
            <div className="bg-gray-600 hover:bg-gray-700 cursor-pointer flex border  rounded-md px-2 py-1">Edit</div>
            <div 
                className={`hover:bg-red-700 bg-red-600 cursor-pointer flex border  rounded-md px-2 py-1`} 
                onClick={deleteElement}>Remove
            </div>
        </div>
        </>
    )
}