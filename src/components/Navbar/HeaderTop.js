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
import { setLngLogo } from "../../state/GlobalSlice";
export const HeaderTop = () => {
    const globalDetail=useSelector(state=>state.globalDetail)
    const isMobile = useMediaQuery('(max-width:1000px)');
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

    return (
        <div className={`${isMobile ? 'h-[80px]' : 'flex-row px-20 h-[100px]'} flex w-screen justify-between items-center p-2`}>
            <Link to='/' className={`${isMobile ? 'flex-col justify-start items-center w-[50%]' : 'flex-row w-[30%] items-center'} h-full flex-row flex`}>
                <img className={`${isMobile ? 'h-[30px]' : 'h-[80px]'} backdrop-blur-md`} src={nepalLogo} />
                <img className={`${isMobile ? 'h-[30px] pr-4' : 'h-[80px] pr-10'} backdrop-blur-md bg-yellow-50 rounded-full shadow-lg`} src={globalDetail['guthi-sansthan-logo'].imgSrc} />
            </Link>
            {loc.pathname !== '/' && !isMobile && <div className={`${isMobile ? 'h-[100px]' : ''} w-[40%] flex items-center justify-center`}>
                <HeaderButtom />
            </div>}
            <div className={`${isMobile ? 'gap-1 w-[50%]' : 'gap-7 w-[30%]'} relative flex-row flex h-full items-center justify-start px-2`}>
                <div ref={divRef} className={`gap-1 w-[40%]  relative flex-row flex items-center justify-end   `}>
                    <div className="relative bg-gray-300/70 rounded-md flex flex-row items-center justify-center p-1">
                        <div className="text-[10px] lg:text-[20px]">LNG</div>
                        <div className={`h-[30px] w-[30px] md:h-[60px] md:w-[60px] cursor-pointer transition-all  items-center flex justify-center   `}
                                onClick={() => { setLanguageOptionHidden(!languageOptionHidden); }}>
                                    <div className="z-30   p-2 overflow-hidden h-full w-full items-center flex justify-center">
                                    {selectLanguage === 'nepali' && <img src={globalDetail['lng-logo']['nepali']}  />}
                                    {selectLanguage === 'newari' && <img src={globalDetail['lng-logo']['newari']}  />}
                                    {selectLanguage === 'english' && <img src={globalDetail['lng-logo']['english']}  />}
                                    {selectLanguage === 'mithila' && <img src={globalDetail['lng-logo']['mithila']}  />}
                                    </div>

                                <div className={`${languageOptionHidden ? 'opacity-0' : 'opacity-100'} w-full absolute flex flex-col gap-2 items-center top-[110%] left-0 bg-gray-300/70 z-20 transition-all duration-500 rounded-sm`}>
                                    {['nepali','newari','english','mithila'].filter(lng=>lng!==selectLanguage).map(
                                        (key,index)=>(
                                        <Language name={key} handleLanguageClick={handleLanguageClick} img={globalDetail['lng-logo'][key]} no={index}></Language>))}
                                    {/* <Language name={'nepali'} handleLanguageClick={handleLanguageClick} img={nepaliFlag} no={1} />
                                    <Language name={'newari'} handleLanguageClick={handleLanguageClick} img={newariFlag} no={2} />
                                    <Language name={'english'} handleLanguageClick={handleLanguageClick} img={englishFlag} no={3}/>
                                    <Language name={'mithila'} handleLanguageClick={handleLanguageClick} img={mithilaFlag} no={4} /> */}
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
