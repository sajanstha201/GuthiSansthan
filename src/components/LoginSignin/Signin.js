import React from 'react';
import bgImage from '../../media/LoginSignin/rectangle.png'
import nepalLandmark from '../../media/LoginSignin/nepalLandmark.png'
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Signin = () => {
    const isMobile=useMediaQuery('(max-width:800px)')
    const {t}=useTranslation()
    return (
        <>
        <div className="fixed h-screen w-screen -z-10 top-0" style={{backgroundImage:`url(${bgImage})`}}></div>
        
        <div className={` bg-cover bg-center  `}>
                <div className={`${isMobile?'':'h-[80vh]'} flex items-center justify-center gap-3  flex-col md:flex-row lg:flex-row  mx-[20px]`}>
                    <div className={`${isMobile?'w-[200px]':'w-[500px]'} `} >
                      <img src={nepalLandmark}  ></img>
                    </div>
                    
                    <div className='flex flex-col item-center justify-center p-3'>
                    <div className='text-white flex item-center justify-center'>
                    <h1>Create an Account</h1>
                </div>
                    <div className='flex flex-col text-white gap-3 '>
                        
                        <div className='flex gap-3'>
                            <div className='flex flex-col'>
                                <label><h5>First Name</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[300px] text-black' placeholder ="First Name" />
                            </div>
                            <div className='flex flex-col'>
                                <label><h5>Last Name</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[300px] text-black' placeholder ="Last Name" />
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <label><h5>Email</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[500px] text-black' placeholder ="Email" />
                        </div>

                        <div className='flex gap-3'>
                            <div className='flex flex-col'>
                                <label><h5>Password</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[300px] text-black' placeholder ="Password" />
                            </div>
                            <div className='flex flex-col'>
                                <label><h5>Confirm Password</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[150px] md:w-[200px] lg:w-[300px] text-black' placeholder ="Confirm Password" />
                            </div>
                        </div>
                        <Link to='/log-in' >Already have an account?</Link>
                        <div className='item-end justify-end mt-5'>
                                <button className='rounded-full w-[200px] h-[40px] font-bold text-white bg-blue-600 text-align-center'><h5>{t('sign-in')} </h5></button>
                             </div>
                          
                         
                              
                    </div>
                    
                    </div>



                </div>

          
           
        </div>
        </>
    );
};
