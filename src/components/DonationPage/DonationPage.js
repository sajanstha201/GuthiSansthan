import { JatraDonationPage, TempleDonationPage } from "./InstanceDonationPage"
import { InstanceDonatoinSection } from "./InstanceDonationSection"

export const DonationPage=()=>{
    return(
        <>
        <h1>This is DonationPage</h1>
        <InstanceDonatoinSection/>
        <InstanceDonatoinSection/>
        <div>
            <JatraDonationPage/>
            <TempleDonationPage/>
        </div>
        </>
    )
}