import { PageInfoProvider } from "./PageInfoProvider"
import { LanguageChoice } from "./LanguageChoice"
import { ScreenProvider } from "./ScreenInfo"
import { CurrentUserProvider } from "./CurrentUserProvider"

export const AppProvider=({children})=>{
    return(
        <>
        <ScreenProvider>
            <LanguageChoice>
                <PageInfoProvider>
                    <CurrentUserProvider>
                    {children}
                    </CurrentUserProvider> 
                </PageInfoProvider>
            </LanguageChoice>
        </ScreenProvider>
        </>
    )
}