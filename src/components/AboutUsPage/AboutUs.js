import React, { useRef, useState } from 'react';
import { AboutUsFirstSection } from './AboutUsFirstSecton';
import { HistoricalBackGround } from './HistoricalBackGround';
import { Introduction } from './Introduction';
import { Objectives } from './Objectives';
import { OrganizationalStructure } from './OrganizationalStructure';
import { RightAndDuties } from './RightAndDuties';
import aboutUsbackimg from '../../media/AboutUsPage/mountain.png';

export const AboutUs = () => {
    const aboutRef = useRef();
    const [sectionSelected, setSectionSelected] = useState('');

    const handleLinkClick = (section) => {
        switch (section) {
            case 'about-us-introduction':
                setSectionSelected('introduction');
                break;
            case 'about-us-historical-background':
                setSectionSelected('historical-background');
                break;
            case 'about-us-right-and-duties':
                setSectionSelected('right-and-duties');
                break;
            case 'about-us-organizational-structure':
                setSectionSelected('organizational-structure');
                break;
            case 'about-us-objectives':
                setSectionSelected('objectives');
                break;
            default:
                setSectionSelected('');
                break;
        }
        setTimeout(() => aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    };

    return (
        <>
            <div className='fixed w-full h-screen top-0 -z-10' style={{ backgroundImage: `url(${aboutUsbackimg})`, backgroundPosition: 'center' }}></div>
            <div className="fixed bg-zinc-800/65 bg-center top-0 w-full h-screen"></div>
            <div className='flex flex-col items-center w-full'>
                <AboutUsFirstSection onLinkClick={handleLinkClick} aboutRef={aboutRef} />
                <div className='flex flex-col w-full lg:w-10/12 xl:w-8/12 mx-auto' ref={aboutRef}>
                    <div id='about-us-introduction' className={`${sectionSelected !== 'introduction' ? 'hidden' : ''}`}>
                        <Introduction />
                    </div>
                    <div id='about-us-historical-background' className={`${sectionSelected !== 'historical-background' ? 'hidden' : ''} flex justify-end`}>
                        <HistoricalBackGround />
                    </div>
                    <div id='about-us-right-and-duties' className={`${sectionSelected !== 'right-and-duties' ? 'hidden' : ''}`}>
                        <RightAndDuties />
                    </div>
                    <div id='about-us-organizational-structure' className={`${sectionSelected !== 'organizational-structure' ? 'hidden' : ''}`}>
                        <OrganizationalStructure />
                    </div>
                    <div id='about-us-objectives' className={`${sectionSelected !== 'objectives' ? 'hidden' : ''}`}>
                        <Objectives />
                    </div>
                </div>
            </div>
        </>
    );
};
