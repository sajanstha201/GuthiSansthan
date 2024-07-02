import { LanguageChoice } from "./LanguageChoice"
import { ScreenProvider } from "./ScreenInfo"

export const AppProvider=({children})=>{
    return(
        <>
        <ScreenProvider>
            <LanguageChoice>
                {children}
            </LanguageChoice>
        </ScreenProvider>
        </>
    )
}