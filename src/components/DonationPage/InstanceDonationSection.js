import { useMediaQuery } from '@mui/material'
import '../../App.css'
export const InstanceDonatoinSection=({name,setSelectDonateSection})=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    return(
        <>
        <div className={`${isMobile?'h-[150px] w-[200px]':'h-[250px] w-[300px] '} relative backdrop-blur-lg overflow-hidden rounded-lg`}>
            <div className="emerge absolute bg-black h-full w-full rounded-lg flex items-center justify-center"
                onClick={()=>setSelectDonateSection(name)}>
                    <div className='text-white font-bold text-3xl z-1'>{name}</div>
            </div>
        </div>
        </>
    )
}