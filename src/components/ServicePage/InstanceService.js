export const InstanceService=({image,name,link ,des})=>{
    return(
        <div className="relative overflow-hidden w-[300px] h-[300px] backdrop-blur-sm  shadow-xl shadow-zinc-600 hover:shadow-red-600/50 rounded-lg  hover:scale-105 ease-in-out transition-all">
            <div className="absolute emerge no-underline w-full h-full">
                <a href={link} className="no-underline w-full h-full">
                    <div className='p-3 flex  flex-col bg-transparent  h-full rounded-md overflow-hidden '>
                           <div  className='w-full h-[50%] bg-cover bg-center flex  justify-center items-center relative' style={{backgroundImage:`URL(${image})`}}>
                                 <h2 className='text-white z-10 font-bold text-3xl'>{name}</h2>
                                 <div className='bg-neutral-900/40 absolute h-full w-full ' ></div>
                           </div>
                          <div className='flex overflow-auto h-[50%]'>
                              <p className='text-neutral-300 text-sm font-semibold text-balance  w-full track'>{des}</p>
                          </div>
                    </div>
                </a>
            </div>
        </div>


    )
}