import React from 'react';
import { useMediaQuery } from '@mui/material';
import aboutUsbackimg from '../../media/AboutUsPage/durbar-palace-square-bhaktapur-nepal.png';
import introImg from '../../media/AboutUsPage/Pashupatinath_temple,kathmandu,Nepal.jpg';
import histoImg from '../../media/AboutUsPage/Patan-Durbar-square-scaled-e1644243944542.jpg';
import rightImg from '../../media/AboutUsPage/Temple-manakamana.jpg';
import orgImg from '../../media/AboutUsPage/shechen-tennyi-dargyeling-golden-temple-in-kathmandu-nepal.jpg';
import objImg from '../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg';
import './AboutUs.css';
import { useTranslation } from 'react-i18next';

export const AboutUsFirstSection = ({ onLinkClick }) => {
    const {t}=useTranslation()
    const isMobile = useMediaQuery('(max-width:800px)');
    return (
        <div className='flex items-center flex-col'>
            <div style={{ backgroundImage: `url(${aboutUsbackimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className='w-full text-[60px] font-bold text-white h-[30vh] flex justify-center items-center'>
               {t('about-us')}
            </div>
            <div className={`${isMobile?'w-[95%] gap-7':'w-[75%] gap-16'} flex flex-wrap items-center justify-center  mt-12`}>
                <div onClick={() => onLinkClick('about-us-introduction')} className={`${isMobile ? 'about-us-img-div-mobile' : 'about-us-img-div'}`}>
                    <img src={introImg} alt="Introduction" />
                    {t('introduction')}
                </div>
                <div onClick={() => onLinkClick('about-us-historical-background')} className={`${isMobile ? 'about-us-img-div-mobile' : 'about-us-img-div'}`}>
                    <img src={histoImg} alt="Historical Background" />
                    {t('historical-background')}
                </div>
                <div onClick={() => onLinkClick('about-us-right-and-duties')} className={`${isMobile ? 'about-us-img-div-mobile' : 'about-us-img-div'}`}>
                    <img src={rightImg} alt="Right and Duties" />
                    {t('right-and-duties')}
                </div>
                <div onClick={() => onLinkClick('about-us-organizational-structure')} className={`${isMobile ? 'about-us-img-div-mobile' : 'about-us-img-div'}`}>
                    <img src={orgImg} alt="Organizational Structure" />
                    {t('organizational-structure')}
                </div>
                <div onClick={() => onLinkClick('about-us-objectives')} className={`${isMobile ? 'about-us-img-div-mobile' : 'about-us-img-div'}`}>
                    <img src={objImg} alt="Objective" />
                    {t('objectives')}
                </div>
            </div>
        </div>
    );
};
