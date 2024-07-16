import { useMediaQuery } from "@mui/material"
import { InstanceDonatoinSection } from "./InstanceDonationSection"
import { useState } from "react"
import { OneDonation } from "./OneDonation"
export const DonationPage=()=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const [selectDonateSection,setSelectDonateSection]=useState('')
    return(
        <>
        <h1>This is DonationPage</h1>
        <div className={`${isMobile?'flex-col gap-7':'flex-row gap-20'} flex  items-center justify-center w-full`}>
            <InstanceDonatoinSection name={'Jatra'} setSelectDonateSection={setSelectDonateSection}/>
            <InstanceDonatoinSection name={'Temple'} setSelectDonateSection={setSelectDonateSection}/>
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
        </>
    )
}