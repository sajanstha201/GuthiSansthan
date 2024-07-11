import img from '../../media/AboutUsPage/shechen-tennyi-dargyeling-golden-temple-in-kathmandu-nepal.jpg'
import { useTranslation } from 'react-i18next'
import { displayMoreDescription } from '../DisplayInfo/MoreDescription'
import { useMediaQuery } from '@mui/material'
export const OrganizationalStructure=()=>{
    const {t}=useTranslation()
    const isMobile=useMediaQuery('(max-width:800px)')
    return(
        <>
        <div className={`${isMobile?'flex-col':'flex-row '} flex w-full `}>
            {isMobile&&<h1>{t('organizational-structure')}</h1>}
            {isMobile&&
                <div className={`${isMobile?'w-full justify-center px-5':'mt-[5%] mr-[5%] justify-end'}  flex items-center   h-[25vh]`}>
                <img src={img} className='max-h-[100%] rounded-md'></img>
                </div>}
            <div className={`${isMobile?'w-full text-center':'w-[60%] left-align'}  flex flex-col text-left p-5 items-center `}>
            {!isMobile&&<h1>{t('organizational-structure')}</h1>}
            {t('intro')}
            {t('intro')}<div onClick={()=>{displayMoreDescription(img,t('organizational-structure'),t('intro'));}} className='cursor-pointer underline text-blue-600'>more info</div>
            </div>
            {!isMobile&&
                <div className={`${isMobile?'w-full justify-center px-5':'mt-[5%] mr-[5%] justify-end'}  flex items-center   h-[25vh]`}>
                <img src={img} className='max-h-[100%] rounded-md'></img>
                </div>}


        </div>
        </>
    )
}