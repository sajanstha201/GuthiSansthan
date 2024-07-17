import { useTranslation } from 'react-i18next'
import firstPerson from '../../../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg'
import { useEffect } from 'react'
import './Teams.css'
import {LeftImageSlider} from './LeftImageSlider'
import {RightImageSlider} from './RightImageSlider'
export const Teams=()=>{
    const {t}=useTranslation()
    return(
        <>     
        <div className="w-full h-full pb-[150px]">
        <h1 className="text-white">Our Teams</h1>
        <div className="h-full w-full flex flex-col overflow-auto px-16">
        <LeftImageSlider image={firstPerson} name={'sajan shrestha'} desc={t('intro')+t('intro')}/>
        <RightImageSlider image={firstPerson} name={'sajan shresha'}  desc={t('intro')} />
        <LeftImageSlider image={firstPerson} name={'sajan shestha'} desc={t('intro')}/>
        <RightImageSlider image={firstPerson} name={'sajan ssha'} desc={t('intro')} />
        <LeftImageSlider image={firstPerson} name={'sajan shestha'} desc={t('intro')}/>
        <RightImageSlider image={firstPerson} name={'sajan ssha'} desc={t('intro')} />
        </div>
        </div>
        </>
    )
}