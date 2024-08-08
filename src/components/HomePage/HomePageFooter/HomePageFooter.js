import { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from '@mui/material';
import { Calendar } from './Calender/Calender';
import { Service } from './Service/Service'; 
import { Teams } from './Teams/Teams';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faGopuram, faUsers, faClose, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setFooterBgImg, setNewFooterBgImg } from '../../../state/HomePageSlices/HomePageSlice';
import { fetchImageToURL } from '../../ReuseableFunctions';
import { EditBgImage } from '../../EditComponents/EditBgImage';
import Temple from './Temple/Temple';
import { useTranslation } from 'react-i18next';
import TempleManagment from './TempleManagment/TempleManagment';

export const HomePageFooter = () => {
    const [selectedSection, setSelectedSection] = useState('');
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width:800px)');
    const hiddenDivRef = useRef();
    const homePageDetail = useSelector(state => state.homePageDetail);
    const dispatch = useDispatch();
    const baseUrl = useSelector(state => state.baseUrl).backend;
    const token = sessionStorage.getItem('token');
    useEffect(() => {
        const fetchFooterImg = async () => {
            dispatch(setFooterBgImg(await fetchImageToURL(baseUrl + homePageDetail.details['footer-bg-img'].image)));
        };

        if (!homePageDetail['footer-bg-img'].isFetched && homePageDetail.isFetched) {
            fetchFooterImg();
        }
    }, [dispatch, baseUrl, homePageDetail]);

    const sections = [
       
        { icon: faCalendarAlt, label: 'Calendar', section: 'calender' },
        { icon: faGopuram, label: 'Temple', section: 'temple' },
        { icon: faUserGear, label: 'Service', section: 'service' },
        { icon: faUsers, label: 'Teams', section: 'teams' }
    ];

    if (token) {
        sections.push( { icon: faGopuram, label: 'Temple managment  Community', section: 'templemanagment' });
    }

    return (
        <>
            <div className="fixed bottom-0 h-[200px] w-full justify-center flex items-center overflow-hidden">
                <EditBgImage
                    imageId={homePageDetail['footer-bg-img'].id}
                    url={homePageDetail['footer-bg-img'].imgSrc }
                    setNewImage={setNewFooterBgImg}
                    isActualUploadedSame={homePageDetail['footer-bg-img'].imgSrc === homePageDetail['footer-bg-img'].actualImgSrc}
                >
                    <div
                        className="fixed bottom-0 -z-20 bg-cover bg-center h-[200px] w-full opacity-70"
                        style={{ backgroundImage: `url(${homePageDetail['footer-bg-img'].imgSrc})` }}
                    ></div>
                </EditBgImage>
                <div
                    className={`${isMobile ? 'bg-gray-300/40 backdrop-blur-md rounded-tl-md rounded-tr-md' : ''} z-10 absolute bottom-0 w-full justify-evenly items-center flex flex-row text-white font-bold`}
                >
                    {sections.map(({ icon, label, section }) => (
                        <div
                            key={section}
                            className={`${isMobile ? 'px-3' : 'px-16'} home-footer-div flex flex-col items-center justify-center hover:scale-150 hover:text-cyan-300 transition-transform duration-75 ease-in hover:-translate-y-3`}
                            onClick={() => setSelectedSection(section)}
                        >
                            <FontAwesomeIcon icon={icon} size='2x' />
                            <h2 className='text-base'>{t(label)}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full' ref={hiddenDivRef}>
                {[
                    { component: Calendar, section: 'calender' },
                    { component: Service, section: 'service' },
                    { component: Temple, section: 'temple' },
                    { component: TempleManagment, section: 'templemanagment' },
                    { component: Teams, section: 'teams' }
                ].map(({ component: Component, section }) => (
                    <div
                        key={section}
                        className={`${selectedSection === section ? 'bottom-0' : 'bottom-[-300%]'} absolute backdrop-blur-lg w-full h-[80vh] transition-all ease-in-out duration-500 rounded-xl z-20`}
                    >
                        <FontAwesomeIcon
                            icon={faClose}
                            size={'2x'}
                            className="cursor-pointer absolute top-0 right-3 text-red-600 z-50"
                            onClick={() => setSelectedSection('')}
                        />
                        {selectedSection === section && <Component />}
                    </div>
                ))}
            </div>
        </>
    );
};
