import { ParvaInstance } from "./ParvaInstance"
import img from '../../../../media/nepalLogo.png'
export const Parva=()=>{
    return(
        <>
        <div className="w-full h-full pb-[100px] flex flex-col ">
        <h1 className="text-white z-40 text-[60px]">Parva</h1>
        <div className="flex w-full h-full items-center justify-center overflow-auto">
            <div className="h-full w-[95%] flex  flex-wrap items-center justify-center gap-7">
                    <ParvaInstance img={img} name={'Dashain'} detail={'lsdkfjsalkdf'}/>
                    <ParvaInstance img={img} name={'Dashain'} detail={'lsdkfjsalkdf'}/>
                    <ParvaInstance img={img} name={'Dashain'} detail={'lsdkfjsalkdf'}/>
                    <ParvaInstance img={img} name={'Dashain'} detail={'lsdkfjsalkdf'}/>
            </div>
        </div>
        </div>
        </>
    )
}