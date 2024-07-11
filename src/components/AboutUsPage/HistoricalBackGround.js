import { useTranslation } from 'react-i18next'
import img from '../../media/AboutUsPage/Patan-Durbar-square-scaled-e1644243944542.jpg'
import { useMediaQuery } from '@mui/material'
export const HistoricalBackGround=()=>{
    const {t}=useTranslation()
    const isMobile=useMediaQuery('(max-width:800px)')
    return(
        <>
        <div className={`${isMobile?'flex-col':'flex-row '} flex w-full `}>
            {isMobile&&<h1>{t('historical-background')}</h1>}
            {isMobile&&
                <div className={`${isMobile?'w-full justify-center px-5':'mt-[5%] mr-[5%] justify-end'}  flex items-center   h-[25vh]`}>
                <img src={img} className='max-h-[100%] rounded-md'></img>
                </div>}
            <div className={`${isMobile?'w-full text-center':'w-[60%] left-align'}  flex flex-col text-left p-5 items-center `}>
            {!isMobile&&<h1>{t('historical-background')}</h1>}
            {t('intro')}            </div>
            {!isMobile&&
                <div className={`${isMobile?'w-full justify-center px-5':'mt-[5%] mr-[5%] justify-end'}  flex items-center   h-[25vh]`}>
                <img src={img} className='max-h-[100%] rounded-md'></img>
                </div>}


        </div>
        </>
    )
}