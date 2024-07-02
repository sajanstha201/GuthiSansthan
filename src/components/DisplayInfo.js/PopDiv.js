export const PopDiv=({divInfo})=>{
    return(
        <div className={`flex items-center justify-center min-h-screen w-screen bg-gray-200 absolute left-0 bg-opacity-70 top-0`} id='popDiv'>
            <div className="bg-white p-10 rounded shadow relative">
            {divInfo}
            <div onClick={()=>{document.getElementById('popDiv').style.display='none'}}className="w-[20px] h-[20px] bg-red-600 absolute right-1 top-1 rounded-full flex items-center justify-center border border-2 border-black">x</div>
            </div>
        </div>
    )
}