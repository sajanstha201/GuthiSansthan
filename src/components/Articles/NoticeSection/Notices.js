import { InstanceNotice } from "./InstanceNotice"

export const Notices=()=>{
    return(
        <>
        <div className="w-full  flex justify-center  h-full">

         <div className="flex flex-col h-full  w-full mx-14 mt-3 border border-red-600 lg:mx-0 lg:w-2/3 rounded-lg overflow-hidden backdrop-blur-lg">
              <div className="w-full flex justify-center items-center h-20 bg-yellow-600">
                 <h1 className="font-semibold text-white underline">NOTICE</h1>

              </div>
              <div className="flex flex-wrap flex-col px-3 gap-2 bg-zinc-900/40  text-white h-full">
                    <InstanceNotice/>
                    <InstanceNotice/>
                    <InstanceNotice/>
              </div>
         </div>
        </div>
     
        </>
    )
}