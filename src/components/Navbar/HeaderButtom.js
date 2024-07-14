import { faCog, faCogs, faContactBook, faHandsHelping, faHome, faInfoCircle, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
export const HeaderButtom=()=>{
    const {t}=useTranslation()
    const loc=useLocation()
    const isMobile=useMediaQuery('(max-width:1200px)')
    return(
        <div className={`${isMobile?'':''} w-full flex items-center justify-center`}>
            <div className={`${isMobile?'w-[90%]':'w-full'}  rounded-full flex flex-row  items-center justify-between px-4  p-2 gap-6 backdrop-blur-sm bg-red-700 bg-opacity-80  `}>
                <Link to='/' className={` flex flex-col no-underline font-bold md:text-xl sm:text-[10px] ${loc.pathname==='/'?'text-yellow-300':'text-white'}`}>
                <FontAwesomeIcon icon={faHome}/>
                {t('home')}
                </Link>
                <Link to='/services' className={`flex flex-col no-underline font-bold md:text-xl sm:text-[10px] ${loc.pathname==="/services"?'text-yellow-300':'text-white'}`}>
                <FontAwesomeIcon icon={faHandsHelping}/>
                {t('our-services')}
                </Link>
                <Link to='/about-us' className={`flex flex-col no-underline font-bold md:text-xl sm:text-[10px] ${loc.pathname==="/about-us"?'text-yellow-300':'text-white'}`}>
                <FontAwesomeIcon icon={faUsers}/>
                {t('about-us')}
                </Link>
                <Link to='/contact-us' className={`flex flex-col no-underline font-bold md:text-xl sm:text-[10px] ${loc.pathname==="/contact-us"?'text-yellow-300':'text-white'}`}>
                <FontAwesomeIcon icon={faContactBook}/>
                {t('contact-us')}
                </Link>
            </div>
        </div>

    )
}