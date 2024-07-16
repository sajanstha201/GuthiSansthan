import logo from '../../../media/guthi sansthan.png'
export const InstanceArticles=({img,desc,title,link})=>{
    return(
        <>         
               <div class="w-full flex flex-wrap bg-white  p-6 px-6 m-2 rounded-md justify-between">
        <div class="w-2/3 flex flex-col items-start px-3 ">
             <img src={logo} height={100} width={100} alt="logo"/>
             <h1>{title}</h1>
             <p className='max-h-6 overflow-clip tracking-tighter text-sm text-neutral-600'>{desc}
             </p>
        </div>
        <div class="w-1/4 bg-gray-400">
              <img src={img}/>
        </div>
   </div></>
    )

}