import { useMediaQuery } from "@mui/material"
import { useSelectLanguage } from "../../context/LanguageChoice";
export const Language=({name,img,handleLanguageClick,no})=>{
    const { selectLanguage, setSelectLanguage } = useSelectLanguage();
    const isMobile=useMediaQuery('(max-width:1000px)')
    return(
        <>
            <div className={`${selectLanguage===name?'hidden w-0':`${isMobile ? 'h-[30px] w-[30px]' : 'h-[60px] w-[60px]'}`} shadow-lg absolute cursor-pointer  items-center flex justify-center bg-red-700 rounded-full overflow-hidden`}
                onClick={() => { handleLanguageClick(name) }}
                style={{right:`${no/5*100}%`}}>
                <img src={img} className={`${selectLanguage===name?'hidden w-0':``}`} />
            </div>
        </>
    )
}