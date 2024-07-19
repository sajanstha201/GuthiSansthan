import { useMediaQuery } from "@mui/material"
import { useSelectLanguage } from "../../context/LanguageChoice";
export const Language=({name,img,handleLanguageClick,no})=>{
    const { selectLanguage, setSelectLanguage } = useSelectLanguage();
    const isMobile=useMediaQuery('(max-width:1000px)')
    return(
        <>
            <div className={`${selectLanguage===name?'hidden ':`${isMobile ? 'h-[15px]' : 'h-[50px] '}`} shadow-lg cursor-pointer  items-center flex justify-centeroverflow-hidden`}
                onClick={() => { handleLanguageClick(name) }}
                style={{right:`${no/5*100}%`}}>
                <img src={img} className={`${selectLanguage===name?'hidden ':``} h-full `} />
            </div>
        </>
    )
}