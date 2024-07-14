import React, { useRef, useState } from 'react';
import {AboutUsFirstSection} from './AboutUsFirstSection';
import {HistoricalBackGround } from './HistoricalBackGround';
import {Introduction} from './Introduction';
import {Objectives} from './Objectives';
import {OrganizationalStructure} from './OrganizationalStructure';
import {RightAndDuties} from './RightAndDuties';
import aboutUsbackimg from '../../media/AboutUsPage/durbar-palace-square-bhaktapur-nepal.png';

export const AboutUs = () => {
    const aboutRef=useRef();
    const [sectionSelected,setSectionSelected]=useState('')

    const handleLinkClick = (section) => {
        switch (section) {
            case 'about-us-introduction':
                setSectionSelected('introduction')
                break;
            case 'about-us-historical-background':
                setSectionSelected('historical-background')
                break;
            case 'about-us-right-and-duties':
                setSectionSelected('right-and-duties')
                break;
            case 'about-us-organizational-structure':
                setSectionSelected('organizational-structure')
                break;
            case 'about-us-objectives':
                setSectionSelected('objectives')
                break;
            default:
                setSectionSelected('')
                break;
        }
        setTimeout(()=>aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', }),200)
    };

    return (
        <>
        <div className=' fixed w-screen h-screen top-0 -z-10 ' style={{ backgroundImage: `url(${aboutUsbackimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className='flex flex-col items-center '  >
            <AboutUsFirstSection onLinkClick={handleLinkClick} aboutRef={aboutRef} />
            <div className='flex w-[85%] flex-col ' ref={aboutRef}>
                <div id='about-us-introduction'className={`${sectionSelected!=='introduction'?'hidden':''}`}>
                    <Introduction />
                </div>
                <div id='about-us-historical-background' className={`${sectionSelected!=='historical-background'?'hidden':''} flex justify-end`}>
                    <HistoricalBackGround />
                </div>
                <div id='about-us-right-and-duties' className={`${sectionSelected!=='right-and-duties'?'hidden':''}`}>
                    <RightAndDuties />
                </div>
                <div id='about-us-organizational-structure'  className={`${sectionSelected!=='organizational-structure'?'hidden':''}`}>
                    <OrganizationalStructure />
                </div>
                <div id='about-us-objectives'  className={`${sectionSelected!=='objectives'?'hidden':''}`}>
                    <Objectives />
                </div>
            </div>

        </div>
        </>
 
    );
};
