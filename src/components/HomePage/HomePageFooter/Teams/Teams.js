import { useTranslation } from 'react-i18next'
import firstPerson from '../../../../media/Teams/p1.png'
import secondPerson from '../../../../media/Teams/p2.png'
import thirdPerson from '../../../../media/Teams/p3.png'
import fourthPerson from '../../../../media/Teams/p4.png'
import { useEffect } from 'react'
import './Teams.css'

import InstantTeam from './InstantTeam'
import { AddTeam } from './AddTeam'
export const Teams=()=>{
    const {t}=useTranslation()
    return(
        <>     
        <div className="w-full h-full pb-5">
        <h1 className="text-white font-bold text-6xl  ">Guthi Sansthan</h1>
        <div className="h-full w-full flex flex-col overflow-auto px-2">
            <InstantTeam image={firstPerson} name={'Dr. Shivraj Pandit'} post={'Chairman'} image1={secondPerson} name1={'Mr. Sailesh Raj Kunwar'}  post1={'Administrator'}   />
            <InstantTeam image={thirdPerson} name={'Dr. Shivraj Pandit'} post={'Chairman'} image1={fourthPerson} name1={'Mr. Sailesh Raj Kunwar'}  post1={'Administrator'}   />
            <AddTeam/>
        </div>
        </div>
        </>
    )
}