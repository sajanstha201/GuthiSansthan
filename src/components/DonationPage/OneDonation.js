import bgImg from '../../media/AboutUsPage/Pashupatinath_temple,kathmandu,Nepal.jpg'
import '../../App.css'
export const OneDonation=()=>{
    return(
        <div className="rounded-full flex items-center justify-center overflow-hidden  w-[200px] h-[200px]">
            <div className={`rounded-full overflow-hidden relative  -z-10 shadow-lg animate-divExpand bg-center bg-cover flex backdrop-blur-md items-center justify-center`} style={{backgroundImage:`url(${bgImg})`}}>
                <div className="font-bold text-3xl text-black ">Donate</div>
            </div>
        </div>
    )
}