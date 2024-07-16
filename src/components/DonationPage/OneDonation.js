import bgImg from '../../media/AboutUsPage/Pashupatinath_temple,kathmandu,Nepal.jpg'
import '../../App.css'
import { useMediaQuery } from '@mui/material'

export const OneDonation = ({ name }) => {
  const isMobile = useMediaQuery('(max-width:800px)')

  return (
    <div className='flex flex-col hover:scale-105 transition-all duration-100 ease-in-out'>
      <div className={`${isMobile ? 'w-[100px] h-[100px]' : 'w-[200px] h-[200px]'} relative flex flex-col items-center justify-center overflow-hidden rounded-full`}>
        <div className={`rounded-full overflow-hidden relative z-1 shadow-lg animate-divExpand bg-center bg-cover flex items-center justify-center`} style={{ backgroundImage: `url(${bgImg})`, width: '100%', height: '100%' }}>
          <div className={`${isMobile ? 'text-[20px]' : 'text-[40px]'} font-bold text-white z-1`}>{name}</div>
          <div className='absolute w-full h-full bg-zinc-900/20'></div>
        </div>
      </div>
      <div>
        <div className={`${isMobile ? 'text-sm' : 'text-3xl'} font-bold text-white bg-blue-700 rounded-full py-2 mt-2`}>Donate</div>
      </div>
    </div>
  )
}
