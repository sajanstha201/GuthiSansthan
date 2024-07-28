import React, { useEffect, useRef, useState } from 'react';
import { AboutUsFirstSection } from './AboutUsFirstSecton';
import { HistoricalBackGround } from './HistoricalBackGround';
import { Introduction } from './Introduction';
import { Objectives } from './Objectives';
import { OrganizationalStructure } from './OrganizationalStructure';
import { RightAndDuties } from './RightAndDuties';
import aboutUsbackimg from '../../media/AboutUsPage/mountain.png';
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { setAboutUsPageWholeDetail, setBgImg, setNewBgImg } from '../../state/AboutUsPageSlice';
import {addLanguage, fetchImageToURL} from '../ReuseableFunctions'
import { EditBgImage } from '../EditComponents/EditBgImage';
import { showAlert } from '../AlertLoader';
export const AboutUs = () => {
    const aboutRef = useRef();
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const [sectionSelected, setSectionSelected] = useState('');
    const aboutUsPageDetail=useSelector(state=>state.aboutUsPageDetail)
    const dispatch=useDispatch()
    useEffect(()=>{
        try{
            const fetchData=async()=>{
                try{
                    const response=await axios.get(baseUrl+aboutUsPageDetail.url)
                    dispatch(setAboutUsPageWholeDetail(response.data.components))
                    dispatch(setBgImg(await fetchImageToURL(baseUrl+response.data.components['about-us'].image)))
                    addLanguage({key:'about-us',lngs:response.data.components['about-us'].text})
                }
                catch(error){
                    console.log(error)
                    showAlert(error,'red')
                }

            }
            if(!aboutUsPageDetail.isFetched) fetchData()
        }
        catch(error){
            console.log(error)
            showAlert(error,'red')
        }

    },[])

    const handleLinkClick = (section) => {
        switch (section) {
            case 'about-us-introduction-tab':
                setSectionSelected('introduction');
                break;
            case 'about-us-historical-background-tab':
                setSectionSelected('historical-background');
                break;
            case 'about-us-rights-and-duties-tab':
                setSectionSelected('right-and-duties');
                break;
            case 'about-us-organizational-structure-tab':
                setSectionSelected('organizational-structure');
                break;
            case 'about-us-objectives-tab':
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
        <EditBgImage imageId={aboutUsPageDetail['bg-img'].id} url={aboutUsPageDetail.url} setNewImage={setNewBgImg} isActualUploadedSame={aboutUsPageDetail['bg-img'].imgSrc===aboutUsPageDetail['bg-img'].actualImgSrc}>
            <div className='fixed w-full h-screen top-0 -z-10 bg-cover' style={{ backgroundImage: `url(${aboutUsPageDetail['bg-img'].imgSrc})`, backgroundPosition: 'center' }}></div> 
        </EditBgImage>
        <div className="fixed bg-zinc-800/65 bg-center top-0 w-full h-screen -z-10"></div>
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
