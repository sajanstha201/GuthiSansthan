import React from 'react'
import EmployeePersonalDetails from './EmployeePersonalDetails'
import WorkingOffice from './WorkingOffice'
import Certificate from './Certificate'
import { Await } from 'react-router-dom'
import Award from './Award'
import TransferWorkDetials from './TransferWorkDetials'
import OtherDocument from './OtherDocument'

const EmployeeDetailsMain = () => {
  return (
    <div className='w-full flex flex-col px-6 gap-6'>
        <EmployeePersonalDetails/>
        <WorkingOffice/>
        <Certificate/>
        <Award/>
        <TransferWorkDetials/>
        <OtherDocument/>
      
    </div>
  )
}

export default EmployeeDetailsMain
