import React, { useRef } from 'react';
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

    const handleLinkClick = (section) => {
        switch (section) {
            case 'about-us-introduction':
                introRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about-us-historical-background':
                histoRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about-us-right-and-duties':
                rightsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about-us-organizational-structure':
                orgRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'about-us-objectives':
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
                <div id='about-us-introduction' ref={introRef}>
                    <Introduction />
                </div>
                <div id='about-us-historical-background' className="flex justify-end"ref={histoRef}>
                    <HistoricalBackGround />
                </div>
                <div id='about-us-right-and-duties' ref={rightsRef}>
                    <RightAndDuties />
                </div>
                <div id='about-us-organizational-structure' ref={orgRef}>
                    <OrganizationalStructure />
                </div>
                <div id='about-us-objectives' ref={objRef}>
                    <Objectives />
                </div>
            </div>

        </div>
    );
};
