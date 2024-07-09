import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
export const HeaderButtom=()=>{
    const {t}=useTranslation()
    return(
        <div className="w-full  flex flex-row  items-center justify-center bg-[#1B286F] p-2 gap-6">
            <Link to='/' className="no-underline font-bold text-xl text-white">
            {t('home')}
            </Link>
            <Link to='/services' className="no-underline font-bold text-xl text-white">
            {t('our-services')}
            </Link>
            <Link to='/about-us' className="no-underline font-bold text-xl text-white">
            {t('about-us')}
            </Link>
            <Link to='/contact-us' className="no-underline font-bold text-xl text-white">
            {t('contact-us')}
            </Link>
        </div>
    )
}