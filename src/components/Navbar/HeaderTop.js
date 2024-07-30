import { styled, useMediaQuery } from "@mui/material";
import { useSelectLanguage } from "../../context/LanguageChoice";
import { useTranslation } from "react-i18next";
import nepalLogo from '../../media/nepalLogo.png';
import { Link, useLocation } from "react-router-dom";
import { HeaderButtom } from "./HeaderButtom";
import { useEffect, useRef, useState } from "react";
import { Language } from "./Language";
import { useSelector } from "react-redux";
import { fetchImageToURL } from "../ReuseableFunctions";
import { useDispatch } from "react-redux";
import { setNewGuthiSansthanLogo, setLngLogo } from "../../state/GlobalSlice";
import { EditImage } from "../EditComponents";
import { useEditing } from "../../context/EditingProvider";
export const HeaderTop = () => {
    const globalDetail=useSelector(state=>state.globalDetail)
    const isMobile = useMediaQuery('(max-width:800px)');
    const {isEditing,setIsEditing}=useEditing()
    const { selectLanguage, setSelectLanguage } = useSelectLanguage();
    const { i18n, t } = useTranslation();
    const loc = useLocation();
    const [languageOptionHidden, setLanguageOptionHidden] = useState(true);
    const divRef = useRef();
    const dispact=useDispatch()
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setLanguageOptionHidden(true);
        }
    };

    const handleLanguageClick = (lang) => {
        setSelectLanguage(lang);
        i18n.changeLanguage(lang);
        setLanguageOptionHidden(true);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleInputClick = (event) => {
        event.stopPropagation();
    };
    return (
        <div className={`${isMobile ? 'h-[80px]' : 'flex-row px-20 h-[100px]'} flex w-screen justify-between items-center p-2`}>
            <Link to='/' 
            className={`${isMobile ? 'flex-col justify-start items-center w-[50%]' : 'flex-row w-[30%] items-center'} h-full flex-row flex`}
            onClick={(e) => {isEditing&&e.preventDefault()}}>
                <img className={`${isMobile ? 'h-[30px]' : 'h-[80px]'} backdrop-blur-md`} src={nepalLogo} />
                <EditImage imageId={globalDetail['guthi-sansthan-logo'].id} url={baseUrl+globalDetail.url} setNewImage={setNewGuthiSansthanLogo} isActualUploadedSame={globalDetail['guthi-sansthan-logo'].imgSrc===globalDetail['guthi-sansthan-logo'].actualImgSrc}>
                    <img className={`${isMobile ? 'h-[30px] pr-4' : 'h-[80px] pr-10'} backdrop-blur-md bg-yellow-50 rounded-full shadow-lg`} src={globalDetail['guthi-sansthan-logo'].imgSrc} />
                </EditImage>
            </Link>
            {loc.pathname !== '/' && !isMobile && <div className={`${isMobile ? 'h-[100px]' : ''} w-[40%] flex items-center justify-center`}>
                <HeaderButtom />
            </div>}
            <div className={`${isMobile ? 'gap-1 w-[50%]' : 'gap-7 w-[30%]'} relative flex-row flex h-full items-center justify-start px-2`}>
                <div ref={divRef} className={`gap-1 w-[40%]  relative flex-row flex items-center justify-end   `}>
                        <div className="text-[10px] lg:text-[20px] font-semibold bg-gray-900/40 px-3 py-1 flex justify-center text-white items-center">LANG</div>
                    <div className="relative bg-gray-300/70 rounded-full flex flex-row items-center justify-center p-1">
                        <div className={`h-[30px] w-[30px] md:h-[60px] md:w-[60px] cursor-pointer transition-all rounded-md p-1 items-center flex justify-center   `}
                                onClick={() => { setLanguageOptionHidden(!languageOptionHidden); }}>
                                    <div className="z-30   p-2 overflow-hidden h-full w-full items-center flex justify-center">
                                    {selectLanguage === 'nepali' && <img src={globalDetail['lng-logo']['nepali']}/>}
                                    {selectLanguage === 'newari' && <img src={globalDetail['lng-logo']['newari']}/>}
                                    {selectLanguage === 'english' && <img src={globalDetail['lng-logo']['english']} />}
                                    {selectLanguage === 'mithila' && <img src={globalDetail['lng-logo']['mithila']}/>}
                                    </div>

                                <div className={`${languageOptionHidden ? 'opacity-0 h-0' : 'opacity-100 '}  absolute flex flex-col gap-2 items-center top-[110%] left-0 bg-gray-300/70 z-20 transition-all duration-500 rounded-md `}>
                                    {['nepali','newari','english','mithila'].filter(lng=>lng!==selectLanguage).map(
                                        (key,index)=>(
                                        <Language name={key} handleLanguageClick={handleLanguageClick} img={globalDetail['lng-logo'][key]} no={index} languageOptionHidden={languageOptionHidden}></Language>))}
                                </div>
                        </div> 
                    </div>


                </div>
                <Link to='/donation' className={`${isMobile ? 'text-[10px] h-[25px]' : 'h-[60%] px-5 py-2'} no-underline px-3 bg-red-600 text-white flex items-center justify-center mx-2 rounded-full hover:bg-red-700 cursor-pointer shadow-sm font-bold`}>
                    {t('donate')}
                </Link>
            </div>
        </div>
    );
};
