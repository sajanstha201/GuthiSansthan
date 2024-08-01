import { useTranslation } from 'react-i18next'
import firstPerson from '../../../../media/Teams/p1.png'
import secondPerson from '../../../../media/Teams/p2.png'
import thirdPerson from '../../../../media/Teams/p3.png'
import fourthPerson from '../../../../media/Teams/p4.png'
import { useEffect } from 'react'
import './Teams.css'
import {LeftImageSlider} from './LeftImageSlider'
import {RightImageSlider} from './RightImageSlider'
export const Teams=()=>{
    const {t}=useTranslation()
    return(
        <>     
        <div className="w-full h-full pb-5">
        <h1 className="text-white">Our Teams</h1>
        <div className="h-full w-full flex flex-col overflow-auto px-2">
        <LeftImageSlider image={firstPerson} name={'Dr. Shivraj Pandit'} post={'Chairman'} desc={'Hi there, I am'}/>
        <RightImageSlider image={secondPerson} name={'Mr. Sailesh Raj Kunwar'}  post={'Administrator'} desc={'Hi there, I am'} />
        <LeftImageSlider image={thirdPerson} name={'Mr. Hari Prasad Subedi'} post={'Spokesperson'} desc={'Hi there, I am'}/>
        <RightImageSlider image={fourthPerson} name={'Mr. Janak Pokhrel'} post={'Information Officer'} desc={'Hi there, I am'}/>
        </div>
        </div>
        </>
    )
}