import { PageInfoProvider } from "./PageInfoProvider"
import { LanguageChoice } from "./LanguageChoice"
import { ScreenProvider } from "./ScreenInfo"
import { CurrentUserProvider } from "./CurrentUserProvider"
import { EditingProvider } from "./EditingProvider"

export const AppProvider=({children})=>{
    return(
        <>
        <ScreenProvider>
            <LanguageChoice>
                <PageInfoProvider>
                    <CurrentUserProvider>
                        <EditingProvider>
                        {children}
                        </EditingProvider>
                    </CurrentUserProvider> 
                </PageInfoProvider>
            </LanguageChoice>
        </ScreenProvider>
        </>
    )
}