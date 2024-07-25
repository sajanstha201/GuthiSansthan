import React from 'react';
import { useMediaQuery } from '@mui/material';
import introImg from '../../../media/AboutUsPage/Pashupatinath_temple,kathmandu,Nepal.jpg';
import histoImg from '../../../media/AboutUsPage/Patan-Durbar-square-scaled-e1644243944542.jpg';
import rightImg from '../../../media/AboutUsPage/Temple-manakamana.jpg';
import orgImg from '../../../media/AboutUsPage/shechen-tennyi-dargyeling-golden-temple-in-kathmandu-nepal.jpg';
import objImg from '../../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg';
import './AboutUsFirstSection.css'
import { useTranslation } from 'react-i18next';
import '../../../App.css'
import { InstanceFirstSection } from './InstanceFirstSection';
export const AboutUsFirstSection = ({ onLinkClick }) => {
    const {t}=useTranslation()
    const isMobile = useMediaQuery('(max-width:800px)');
    return (
        <div className='flex items-center flex-col mb-6 w-full '>
            <div 
                className={`${isMobile?'text-[30px] h-[30vh]':'text-[60px] h-[30vh]'} w-full  font-bold text-white  flex justify-center items-center z-1`}>
               {t('about-us')}
            </div>
            <div className={`${isMobile?'w-[95%]':'w-[80%] '}  rounded-md `}>
                <div className={`${isMobile?'gap-7':' gap-24'} w-8/10 h-8/10 flex flex-wrap items-center justify-center  rounded-md `}>
                        <InstanceFirstSection bgImage={introImg} name={'introduction-tab'} onLinkClick={onLinkClick}/>
                        <InstanceFirstSection bgImage={histoImg} name={'historical-background-tab'} onLinkClick={onLinkClick}/>
                        <InstanceFirstSection bgImage={rightImg} name={'rights-and-duties-tab'} onLinkClick={onLinkClick}/>
                        <InstanceFirstSection bgImage={orgImg} name={'organizational-structure-tab'} onLinkClick={onLinkClick}/>
                        <InstanceFirstSection bgImage={objImg} name={'objectives-tab'} onLinkClick={onLinkClick}/>
                </div>

            </div>
        </div>
    );
};
