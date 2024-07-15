import { useMediaQuery } from "@mui/material"

export const InstanceService=({image,name,link ,des})=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    return(
        <div className={`${isMobile?'w-[150px] h-[150px]':'w-[300px] h-[300px]'} relative overflow-hidden  backdrop-blur-sm  shadow-xl shadow-zinc-600 hover:shadow-red-600/50 rounded-lg  hover:scale-105 ease-in-out transition-all`}>
            <div className="absolute emerge no-underline w-full h-full">
                <a href={link} className="no-underline w-full h-full">
                    <div className='p-3 flex  flex-col bg-transparent  h-full rounded-md overflow-hidden '>
                           <div  className='w-full h-[50%] bg-cover bg-center flex  justify-center items-center relative' style={{backgroundImage:`URL(${image})`}}>
                                 <h2 className={`${isMobile?'text-[15px]':''} text-white z-10 font-bold `}>{name}</h2>
                                 <div className='bg-neutral-900/40 absolute h-full w-full ' ></div>
                           </div>
                          <div className='flex overflow-auto h-[50%]'>
                              <p className={`${isMobile?'text-[10px] ':'text-sm '} text-neutral-300 font-semibold text-balance  w-full track`}>{des}</p>
                          </div>
                    </div>
                </a>
            </div>
        </div>


    )
}