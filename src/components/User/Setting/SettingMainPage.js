import { PasswordSecuritySection } from "./PasswordSecuritySection"
import { ProfileUpdateSection } from "./ProfileUpdateSection"
import {useState} from 'react'
export const SettingMainPage=()=>{
    const [section,setSection]=useState('profile-update-section')
    return(
        <>
        <div className="flex items-col  w-full justify-between px-[30%] h-[10vh] bg-slate-500 items-center text-white font-bold text-[30px] cursor-pointer">
            <div onClick={()=>setSection('profile-update-section')}>Profile Updation</div>
            <div onClick={()=>setSection('password-security-section')}>Password Securty Section</div>
        </div>
        <div>
            {section==='profile-update-section'&&<ProfileUpdateSection/>}
            {section==='password-security-section'&&<PasswordSecuritySection/>}
        </div>
        </>
    )
}