import { Articles } from "./ArticleSection/Articles"
import { Notices } from "./NoticeSection/Notices"

export const ArticleMainSection=()=>{
    return(
        <>
            <div className="flex flex-row w-full">
                <div className="w-[60%]">
                    <Articles/>
                </div>
                <div className="w-[40%]">
                    <Notices/>
                </div>
                
            </div>
        </>

    )
}