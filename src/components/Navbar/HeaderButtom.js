import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
export const HeaderButtom=()=>{
    const {t}=useTranslation()
    const loc=useLocation()
    console.log(loc)
    return(
        <div className="w-full  flex flex-row  items-center justify-center bg-red-700 p-2 gap-6">
            <Link to='/' className={`no-underline font-bold md:text-xl sm:text-[10px] ${loc.pathname==='/'?'text-yellow-300':'text-white'}`}>
            {t('home')}
            </Link>
            <Link to='/services' className={`no-underline font-bold md:text-xl sm:text-[10px] ${loc.pathname==="/services"?'text-yellow-300':'text-white'}`}>
            {t('our-services')}
            </Link>
            <Link to='/about-us' className={`no-underline font-bold md:text-xl sm:text-[10px] ${loc.pathname==="/about-us"?'text-yellow-300':'text-white'}`}>
            {t('about-us')}
            </Link>
            <Link to='/contact-us' className={`no-underline font-bold md:text-xl sm:text-[10px] ${loc.pathname==="/contact-us"?'text-yellow-300':'text-white'}`}>
            {t('contact-us')}
            </Link>
        </div>
    )
}