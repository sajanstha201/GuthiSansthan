import { PageInfoProvider } from "./PageInfoProvider"
import { LanguageChoice } from "./LanguageChoice"
import { ScreenProvider } from "./ScreenInfo"
import { CurrentUserProvider } from "./CurrentUserProvider"
import { EditingProvider } from "./EditingProvider"
import { HomePageBgProvider } from "./HomePageBg"

export const AppProvider=({children})=>{
    return(
        <>
        <ScreenProvider>
            <LanguageChoice>
                <PageInfoProvider>
                    <CurrentUserProvider>
                        <EditingProvider>
                            <HomePageBgProvider>
                            {children}
                            </HomePageBgProvider>
                        
                        </EditingProvider>
                    </CurrentUserProvider> 
                </PageInfoProvider>
            </LanguageChoice>
        </ScreenProvider>
        </>
    )
}