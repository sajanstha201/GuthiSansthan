import { useMediaQuery } from "@mui/material";
import { useSelectLanguage } from "../../context/LanguageChoice";
import { useTranslation } from "react-i18next";
import nepaliFlag from '../../media/FlagInfo/NepalFlag.png';
import newariFlag from '../../media/FlagInfo/NewariFlag.png';
import englishFlag from '../../media/FlagInfo/EnglishFlag.svg';
import mithilaFlag from '../../media/FlagInfo/MithilaFlag.png';
import guthiLogo from '../../media/guthi sansthan.png';
import nepalLogo from '../../media/nepalLogo.png';
import { Link, useLocation } from "react-router-dom";
import { HeaderButtom } from "./HeaderButtom";
import { useEffect, useRef, useState } from "react";

export const HeaderTop = () => {
    const isMobile = useMediaQuery('(max-width:1200px)');
    const { selectLanguage, setSelectLanguage } = useSelectLanguage();
    const { i18n, t } = useTranslation();
    const loc = useLocation();
    const [languageOptionHidden, setLanguageOptionHidden] = useState(true);
    const divRef = useRef();

    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setLanguageOptionHidden(true);
        }
    };

    const handleDropDown = (lang) => {
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
            <Link to='/' className={`${isMobile ? 'flex-col justify-start items-center w-[60%]' : 'flex-row w-[30%] items-center'} h-full flex-row flex`}>
                <img className={`${isMobile ? 'h-[40px]' : 'h-[80px]'} backdrop-blur-md`} src={nepalLogo} />
                <img className={`${isMobile ? 'h-[40px] pr-4' : 'h-[80px] pr-10'} backdrop-blur-md bg-yellow-50 rounded-full shadow-lg`} src={guthiLogo} />
            </Link>
            {loc.pathname !== '/' && !isMobile && <div className={`${isMobile ? 'h-[100px]' : ''} w-[40%] flex items-center justify-center`}>
                <HeaderButtom />
            </div>}
            <div className={`${isMobile ? 'gap-2 w-[40%]' : 'gap-7 w-[20%]'} relative flex-row flex h-full items-center justify-end px-2`}>
                <div ref={divRef} className={`${isMobile ? 'gap-2 w-[40px]' : 'gap-7 w-[60px]'} relative flex-row flex h-full items-center justify-end`}>
                    <div className={`${isMobile ? 'h-[40px] w-[40px]' : 'h-[60px] w-[60px]'} cursor-pointer transition-all overflow-hidden items-center flex justify-center`}
                        onClick={() => { setLanguageOptionHidden(!languageOptionHidden); }}>
                        {selectLanguage === 'nepali' && <img src={nepaliFlag} className="max-h-full max-w-full" />}
                        {selectLanguage === 'newari' && <img src={newariFlag} className="max-h-full max-w-full" />}
                        {selectLanguage === 'english' && <img src={englishFlag} className="max-h-full max-w-full" />}
                        {selectLanguage === 'mithila' && <img src={mithilaFlag} className="max-h-full max-w-full" />}
                    </div>
                    <div onClick={()=>{console.log('sajan shrgasjkl')}}className={`${languageOptionHidden ? 'hidden' : ''} absolute flex flex-col -left-1 top-[100%] items-start w-[70px] z-10 gap-2 rounded-md bg-red-700 p-1`}>
                        <div className="flex flex-row items-center justify-center gap-2">
                            <div className={`cursor-pointer items-center flex justify-center gap-2`}
                                onClick={() => { handleDropDown('nepali'); }}>
                                <img src={nepaliFlag} className={`${isMobile ? 'h-[30px] w-[30px]' : 'h-[30px] w-[30px]'} max-h-full max-w-full`} />
                            </div>
                            <div className={`cursor-pointer items-center flex justify-center gap-2`}
                                onClick={() => { handleDropDown('newari'); }}>
                                <img src={newariFlag} className={`${isMobile ? 'h-[30px] w-[30px]' : 'h-[30px] w-[30px]'} max-h-full max-w-full`} />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-2">
                            <div className={`cursor-pointer items-center flex justify-center gap-2`}
                                onClick={() => { handleDropDown('english'); }}>
                                <img src={englishFlag} className={`${isMobile ? 'h-[30px] w-[30px]' : 'h-[30px] w-[30px]'} max-h-full max-w-full`} />
                            </div>
                            <div className={`cursor-pointer items-center flex justify-center gap-2`}
                                onClick={() => { handleDropDown('mithila'); }}>
                                <img src={mithilaFlag} className={`${isMobile ? 'h-[30px] w-[30px]' : 'h-[30px] w-[30px]'} max-h-full max-w-full`} />
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/donation' className={`${isMobile ? 'text-[10px] h-[25px]' : 'h-[60%] px-5 py-2'} px-3 bg-red-600 text-white flex items-center justify-center mx-2 rounded-full hover:bg-red-700 cursor-pointer shadow-sm font-bold`}>
                    {t('donate')}
                </Link>
            </div>
        </div>
    );
};
