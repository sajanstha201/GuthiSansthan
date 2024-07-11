import React, { useRef, useState } from 'react';
import {AboutUsFirstSection} from './AboutUsFirstSection';
import {HistoricalBackGround } from './HistoricalBackGround';
import {Introduction} from './Introduction';
import {Objectives} from './Objectives';
import {OrganizationalStructure} from './OrganizationalStructure';
import {RightAndDuties} from './RightAndDuties';

export const AboutUs = () => {
    const introRef = useRef(null);
    const histoRef = useRef(null);
    const rightsRef = useRef(null);
    const orgRef = useRef(null);
    const objRef = useRef(null);
    const [sectionSelected,setSectionSelected]=useState('')

    const handleLinkClick = (section) => {
        switch (section) {
            case 'about-us-introduction':
                setSectionSelected('introduction')
                introRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about-us-historical-background':
                setSectionSelected('historical-background')
                histoRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about-us-right-and-duties':
                setSectionSelected('right-and-duties')
                rightsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about-us-organizational-structure':
                setSectionSelected('organizational-structure')
                orgRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about-us-objectives':
                setSectionSelected('objectives')
                objRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <AboutUsFirstSection onLinkClick={handleLinkClick} />
            <div className='flex w-[85%] flex-col'>
                <div id='about-us-introduction' ref={introRef} className={`${sectionSelected!=='introduction'?'hidden':''}`}>
                    <Introduction />
                </div>
                <div id='about-us-historical-background' className={`${sectionSelected!=='historical-background'?'hidden':''} flex justify-end`}ref={histoRef}>
                    <HistoricalBackGround />
                </div>
                <div id='about-us-right-and-duties' className={`${sectionSelected!=='right-and-duties'?'hidden':''}`} ref={rightsRef}>
                    <RightAndDuties />
                </div>
                <div id='about-us-organizational-structure' ref={orgRef} className={`${sectionSelected!=='organizational-structure'?'hidden':''}`}>
                    <OrganizationalStructure />
                </div>
                <div id='about-us-objectives' ref={objRef} className={`${sectionSelected!=='objectives'?'hidden':''}`}>
                    <Objectives />
                </div>
            </div>

        </div>
    );
};
