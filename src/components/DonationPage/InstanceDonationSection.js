import { useMediaQuery } from '@mui/material'
import '../../App.css'

export const InstanceDonationSection = ({ name, setSelectDonateSection, bgImg }) => {
  const isMobile = useMediaQuery('(max-width:800px)')

  return (
    <div className={`${isMobile ? 'h-[100px] w-[150px]' : 'h-[200px] w-[300px]'} relative  overflow-hidden rounded-lg hover:scale-105 transition-all duration-100 ease-in-out`}>
      <div
        className=" absolute h-full w-full rounded-lg flex items-center justify-center bg-center bg-cover"
        onClick={() => setSelectDonateSection(name)}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="text-white font-bold text-3xl z-1">{name}</div>
        <div className='absolute w-full h-full bg-zinc-900/50 hover:bg-zinc-900/30'></div>
        
      </div>
      
    </div>
  )
}
