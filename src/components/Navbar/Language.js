import { useMediaQuery } from "@mui/material"
import { useSelectLanguage } from "../../context/LanguageChoice";
export const Language=({name,img,handleLanguageClick,no,languageOptionHidden})=>{
    const { selectLanguage, setSelectLanguage } = useSelectLanguage();
    const isMobile=useMediaQuery('(max-width:1000px)')
    return(
        <>
            <div className={`${selectLanguage===name?'hidden ':`${isMobile ? 'h-[15px]' : 'h-[50px] '}`} shadow-lg cursor-pointer  items-center flex justify-centeroverflow-hidden px-2 py-1`}
                onClick={() => { handleLanguageClick(name) }}
                style={{right:`${no/5*100}%`}}>
                <img src={img} className={`${selectLanguage===name?'hidden ':``}  ${languageOptionHidden?'h-0':'h-full'}`} />
            </div>
        </>
    )
}