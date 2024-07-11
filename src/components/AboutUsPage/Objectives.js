import img from '../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
export const Objectives=()=>{
    const {t}=useTranslation()
    const isMobile=useMediaQuery('(max-width:800px)')
    return(
        <>
        <div className={`${isMobile?'flex-col':'flex-row '} flex w-full `}>
            {isMobile&&<h1>{t('objectives')}</h1>}
            <div className={`${isMobile?'w-full justify-center':'mt-[5%] ml-[5%] justify-end'}  flex items-center   h-[25vh]`}>
            <img src={img} className='max-h-[100%] rounded-md'></img>
            </div>
            <div className={`${isMobile?'w-full text-center':'w-[60%] left-align'}  flex flex-col text-left p-5 items-center `}>
            {!isMobile&&<h1>{t('objectives')}</h1>}
            {t('intro')}
            </div>
        </div>
        </>
    )
}