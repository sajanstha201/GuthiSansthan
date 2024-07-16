import { InstanceNotice } from "./InstanceNotice"

export const Notices=()=>{
    return(
        <>
        <div className="w-full flex justify-center h-full">

         <div className="flex flex-col h-full bg-white w-full lg:w-2/3 rounded-lg overflow-hidden">
              <div className="w-full flex justify-center items-center h-20 bg-gradient-to-t from-orange-200 to-[#FFA014]">
                 <h1 className="font-semibold ">NOTICE</h1>

              </div>
              <div className="flex flex-col px-3 gap-2">
                    <InstanceNotice/>
                    <InstanceNotice/>
                    <InstanceNotice/>
              </div>
         </div>
        </div>
     
        </>
    )
}