import { styled, useMediaQuery } from "@mui/material";
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
import { Language } from "./Language";

export const HeaderTop = () => {
    const isMobile = useMediaQuery('(max-width:1000px)');
    const { selectLanguage, setSelectLanguage } = useSelectLanguage();
    const { i18n, t } = useTranslation();
    const loc = useLocation();
    const [languageOptionHidden, setLanguageOptionHidden] = useState(false);
    const divRef = useRef();
    const [flagInfo,setFlagInfo]=useState({
        'nepali':nepaliFlag,
        'newari':newariFlag,
        'english':englishFlag,
        'mithila':mithilaFlag
    })
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
            <Link to='/' className={`${isMobile ? 'flex-col justify-start items-center w-[60%]' : 'flex-row w-[30%] items-center'} h-full flex-row flex`}>
                <img className={`${isMobile ? 'h-[40px]' : 'h-[80px]'} backdrop-blur-md`} src={nepalLogo} />
                <img className={`${isMobile ? 'h-[40px] pr-4' : 'h-[80px] pr-10'} backdrop-blur-md bg-yellow-50 rounded-full shadow-lg`} src={guthiLogo} />
            </Link>
            {loc.pathname !== '/' && !isMobile && <div className={`${isMobile ? 'h-[100px]' : ''} w-[40%] flex items-center justify-center`}>
                <HeaderButtom />
            </div>}
            <div className={`${isMobile ? 'gap-2 w-[40%]' : 'gap-7 w-[20%]'} relative flex-row flex h-full items-center justify-start px-2`}>
                <div ref={divRef} className={`${isMobile ? 'gap-2 ' : 'gap-7 '} w-[60%] p-2 relative flex-row flex h-full justify-start  `}>
                    <div className={`${isMobile ? 'h-[30px] w-[30px]':'h-[60px] w-[60px]'} relative cursor-pointer transition-all  items-center flex justify-center   `}
                            onClick={() => { setLanguageOptionHidden(!languageOptionHidden); }}>
                                <div className="z-30 bg-red-700 rounded-full overflow-hidden h-full w-full items-center flex justify-center">
                                {selectLanguage === 'nepali' && <img src={nepaliFlag}  />}
                                {selectLanguage === 'newari' && <img src={newariFlag}  />}
                                {selectLanguage === 'english' && <img src={englishFlag}  />}
                                {selectLanguage === 'mithila' && <img src={mithilaFlag}  />}
                                </div>

                            <div className={`${languageOptionHidden ? 'w-[200%] left-[10%]' : 'opacity-100 w-[400%] left-[-15px] '}   absolute h-full flex flex-row  items-start z-20 transition-all duration-500 rounded-full`}>
                                {['nepali','newari','english','mithila'].filter(lng=>lng!==selectLanguage).map(
                                    (key,index)=>(
                                    <Language name={key} handleLanguageClick={handleLanguageClick} img={flagInfo[key]} no={index}></Language>))}
                                {/* <Language name={'nepali'} handleLanguageClick={handleLanguageClick} img={nepaliFlag} no={1} />
                                <Language name={'newari'} handleLanguageClick={handleLanguageClick} img={newariFlag} no={2} />
                                <Language name={'english'} handleLanguageClick={handleLanguageClick} img={englishFlag} no={3}/>
                                <Language name={'mithila'} handleLanguageClick={handleLanguageClick} img={mithilaFlag} no={4} /> */}
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
