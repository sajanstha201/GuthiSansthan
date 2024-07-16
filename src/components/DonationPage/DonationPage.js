import { useMediaQuery } from "@mui/material"
import { InstanceDonationSection } from "./InstanceDonationSection"
import { useState } from "react"
import { OneDonation } from "./OneDonation"
import jatraImg from '../../media/DonationPage/image.png'
import tempImg from '../../media/DonationPage/Pashupatinath_temple,kathmandu,Nepal.jpg'
export const DonationPage=()=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const [selectDonateSection,setSelectDonateSection]=useState('')
    return(
        <>
        <div className="w-full h-full top-0 fixed bg-center bg-cover  -z-10" style={{backgroundImage:`url(${tempImg})`}}>
        <div className="absolute inset-0 bg-neutral-900/50 backdrop-filter backdrop-blur-sm bg-opacity-50"></div>
        </div>
            <div className="flex flex-col gap-3 mt-5">
                <div className={`${isMobile?' gap-5':' gap-20'} flex flex-row flex-wrap  items-center justify-center w-full`}>
                    <InstanceDonationSection name={'Jatra'} setSelectDonateSection={setSelectDonateSection} bgImg={jatraImg}/>
                    <InstanceDonationSection name={'Temple'} setSelectDonateSection={setSelectDonateSection} bgImg={tempImg}/>
                </div>
                
                <div className="w-full flex items-center justify-center" >
                    <div className="flex w-[80%] flex-wrap items-center justify-center gap-7 p-3">
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                    </div>
                </div>
            </div>
        </>

    )
}