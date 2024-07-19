import bgImg from '../../media/AboutUsPage/Pashupatinath_temple,kathmandu,Nepal.jpg'
import '../../App.css'
import { useMediaQuery } from '@mui/material'
import {motion} from 'framer-motion'

export const OneDonation = ({ name }) => {
  const isMobile = useMediaQuery('(max-width:800px)')

  return (
    <motion.div initial={{y:100 ,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.4, delay:0.5}} className='flex flex-col hover:scale-105 transition-all duration-100 ease-in-out'>
      <div className={`${isMobile ? 'w-[100px] h-[100px]' : 'w-[200px] h-[200px]'} relative flex flex-col items-center justify-center overflow-hidden rounded-full`}>
        <div className={`rounded-full overflow-hidden relative z-1 shadow-lg bg-center bg-cover flex items-center justify-center`} style={{ backgroundImage: `url(${bgImg})`, width: '100%', height: '100%' }}>
          <div className={`${isMobile ? 'text-[20px]' : 'text-[40px]'} font-bold text-white z-50`}>{name}</div>
          <div className='absolute w-full h-full bg-zinc-900/20 z-10'></div>
        </div>
      </div>
      <div>
        <div className={`${isMobile ? 'text-sm' : 'text-3xl'} font-bold text-white bg-blue-700 rounded-full hover:scale-105 transition-all duration-100 py-2 mt-2`}>Donate</div>
      </div>
    </motion.div>
  )
}
