import React from 'react';
import bgImage from '../../media/LoginSignin/rectangle.png'
import nepalLandmark from '../../media/LoginSignin/nepalLandmark.png'
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Login = () => {
    const isMobile=useMediaQuery('(max-width:800px)')
    const {t}=useTranslation()
    return (
        <>
        <div className="fixed h-screen w-screen -z-10 top-0" style={{backgroundImage:`url(${bgImage})`}}></div>
        
        <div
            className="bg-cover bg-center h-screen "
            style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: 'fixed' }}
        >
           
                

                <div className={`${isMobile?'':'h-[80vh]'} flex items-center justify-center gap-5  flex-col md:flex-row lg:flex-row`}>
                <div className={`${isMobile?'w-[200px]':'w-[500px]'} `} >
                      <img src={nepalLandmark}  ></img>
                    </div>
                    
                    <div className='flex flex-col item-center justify-center'>
                    <div className='text-white flex item-center justify-center'>
                    <h1>Welcome Back!</h1>
                </div>
                    <div className='flex flex-col text-white '>
                        
                            <div> <label  className='items-start justify-start'>Name</label>            </div>
                            <div>  <input type='text' className='text-black w-[350px] h-8 rounded'></input>       </div>
                            <div> <label>Password</label>           </div>
                            <div> <input    className='text-black  w-[350px] h-8 rounded'></input> </div>
                         
                            <br/>
                             <div className='item-end justify-end'>
                                <button className=' rounded-full w-[120px] h-[40px] font-bold text-white bg-blue-600 text-align-center'><h5>{t('log-in')} </h5></button>
                             </div>
                              
                    </div>
                    
                    </div>



                </div>

          
           
        </div>
        </>
    );
};
