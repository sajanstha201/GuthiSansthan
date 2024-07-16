import { Articles } from "./ArticleSection/Articles"
import { Notices } from "./NoticeSection/Notices"
import bg from '../../media/Article/pasupatibg.jpg'


export const ArticleMainSection=()=>{
    return(
        <>
         <div className="bg-cover bg-center h-screen w-full fixed -z-10 top-0"style={{backgroundImage:`url(${bg})`}}></div>
            <div className="flex flex-wrap w-full " >
                <div className="w-full lg:w-[60%] px-6">
                    <Articles/>
                </div>
                <div className="w-full lg:w-[40%] px-5">
                    <Notices/>
                </div>
                
            </div>
        </>

    )
}