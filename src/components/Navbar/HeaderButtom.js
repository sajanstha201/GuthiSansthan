import { faCog, faCogs, faContactBook, faFileAlt, faHandsHelping, faHome, faInfoCircle, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
export const HeaderButtom=()=>{
    const {t}=useTranslation()
    const loc=useLocation()
    const isMobile=useMediaQuery('(max-width:1200px)')
    return(
        <div className={`${isMobile?'':''} w-full flex items-center justify-center fixed bottom-2`}>
            <div className={`${isMobile?'max-w-[90%]':'w-full'}  rounded-full flex flex-row  items-center justify-between px-4  p-2 gap-6  bg-neutral-300/30  backdrop-blur-md bg-opacity-80  `}>
                <Link to='/' className={` flex flex-col no-underline font-bold md:text-xl text-[10px] hover:scale-125 transition-transform duration-100 ease-in ${loc.pathname==='/'?'text-yellow-300':'text-white'}`}>
                <FontAwesomeIcon icon={faHome}/>
                {t('home')}
                </Link>
                <Link to='/services' className={`flex flex-col no-underline font-bold md:text-xl text-[10px] hover:scale-125 transition-transform duration-100 ease-in ${loc.pathname==="/services"?'text-yellow-300':'text-white'}`}>
                <FontAwesomeIcon icon={faHandsHelping}/>
                {t('our-services')}
                </Link>
                <Link to='/about-us' className={`flex flex-col no-underline font-bold md:text-xl text-[10px] hover:scale-125 transition-transform duration-100 ease-in ${loc.pathname==="/about-us"?'text-yellow-300':'text-white'}`}>
                <FontAwesomeIcon icon={faUsers}/>
                {t('about-us')}
                </Link>
                <Link to='/contact-us' className={`flex flex-col no-underline font-bold md:text-xl text-[10px] hover:scale-125 transition-transform duration-100 ease-in ${loc.pathname==="/contact-us"?'text-yellow-300':'text-white'}`}>
                <FontAwesomeIcon icon={faContactBook}/>
                {t('contact-us')}
                </Link>
                <Link to='/articles' className={`flex flex-col no-underline font-bold md:text-xl text-[10px] hover:scale-125 transition-transform duration-100 ease-in ${loc.pathname==="/articles"?'text-yellow-300':'text-white'}`}>
                <FontAwesomeIcon icon={faFileAlt}/>
                {t('articles')}
                </Link>
            </div>
        </div>

    )
}