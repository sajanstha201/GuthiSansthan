import { useMediaQuery } from "@mui/material"
import { InstanceDonationSection } from "./InstanceDonationSection"
import { useEffect, useState } from "react"
import { OneDonation } from "./OneDonation"
import jatraImg from '../../media/DonationPage/image.png'
import tempImg from '../../media/DonationPage/Pashupatinath_temple,kathmandu,Nepal.jpg'
import bg from '../../media/DonationPage/5.png'
import {motion} from 'framer-motion'
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setBgImg, setDonationPageWholeDetail, setNewBgImg } from "../../state/DonationPageSlice"
import {addLanguage, fetchImageToURL} from '../ReuseableFunctions'
import {EditBgImage} from '../EditComponents/EditBgImage'
import { showAlert } from "../AlertLoader"
export const DonationPage=()=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const [selectDonateSection,setSelectDonateSection]=useState('')
    const homePageDetail=useSelector(state=>state.homePageDetail)
    const globalDetail=useSelector(state=>state.globalDetail)
    const donationPageDetail=useSelector(state=>state.donationPageDetail)
    const baseUrl=useSelector(state=>state.baseUrl).backend
    const dispatch=useDispatch()
    useEffect(()=>{
        try{
            const fetchStaticData=async ()=>{
                try{
                    const response=await axios.get(baseUrl+donationPageDetail.url)
                    dispatch(setDonationPageWholeDetail(response.data.components))
                    dispatch(setBgImg(await fetchImageToURL(baseUrl+response.data.components['bg-img'].image)))
                    console.log(response.data)
                }
                catch(error){
                    console.log(error)
                    showAlert(error,'red')
                }

            }
            const fetchDynamicData=async ()=>{
                try{
                    const response=await axios.get(baseUrl+donationPageDetail.dynamicUrl)
                    console.log(response.data)
                }
                catch(error){
                    console.log(error)
                    showAlert(error,'red')
                }
            }
            if(!donationPageDetail.isFetched) fetchStaticData()
            if(!donationPageDetail.isDynamicFetched) fetchDynamicData()
        }
        catch(error){
            console.log(error)
            showAlert(error,'red')
        }
  
    },[])
    return(
        <>
        <EditBgImage imageId={donationPageDetail['bg-img'].id} url={donationPageDetail.url} setNewImage={setNewBgImg} isActualUploadedSame={donationPageDetail['bg-img'].imgSrc===donationPageDetail['bg-img'].actualImgSrc}>
        <div className="w-full h-full top-0 fixed bg-center bg-cover  -z-10" style={{backgroundImage:`url(${donationPageDetail['bg-img'].imgSrc})`}}></div>
        </EditBgImage>
  
        <div className="absolute inset-0 bg-neutral-900/50 backdrop-filter-blur blur-sm bg-opacity-50 -z-10"></div>
            <div className="flex flex-col gap-3 mt-5">
                <motion.div  initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1.9}} className={`${isMobile?' gap-5':' gap-20'} flex flex-row flex-wrap  items-center justify-center w-full`}>
                    <InstanceDonationSection  className='hover:scale-105 transition-all duration-100 ease-in-out animate-pulse' name={'jatra'} setSelectDonateSection={setSelectDonateSection} bgImg={jatraImg}/>
                    <InstanceDonationSection className='hover:scale-105 transition-all duration-100 ease-in-out animate-pulse' name={'temple'} setSelectDonateSection={setSelectDonateSection} bgImg={tempImg}/>
                </motion.div>
                <div className="w-full flex items-center justify-center" >
                    <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1.5 , delay:0.4}} className="flex w-[80%] flex-wrap items-center justify-center gap-7 p-3">
                    {selectDonateSection==='jatra'&&<>
                
                    </>}
                    {selectDonateSection==='temple'&&<>

                    </>}
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                        <OneDonation name={'sajan'}/>
                    </motion.div>
                </div>
            </div>
        </>

    )
}