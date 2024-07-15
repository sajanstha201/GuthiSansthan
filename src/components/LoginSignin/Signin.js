import React from 'react';
import bgImage from '../../media/LoginSignin/rectangle.png'
import nepalLandmark from '../../media/LoginSignin/nepalLandmark.png'

export const Signin = () => {
    return (
  
        <div
            className="bg-cover bg-center h-screen "
            style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: 'fixed' }}
        >
           
                

                <div className='flex items-center justify-center gap-3 h-[80vh] flex-col md:flex-row lg:flex-row  mx-[20px]'>
                    <div  >
                      <img src={nepalLandmark}  className=' h-100 sm:w-[400px] w-500  md:w-500   lg:w-500 sm:mt-[50px]  '></img>
                    </div>
                    
                    <div className='flex flex-col item-center justify-center'>
                    <div className='text-white flex item-center justify-center'>
                    <h1>Create an Account</h1>
                </div>
                    <div className='flex flex-col text-white gap-3'>
                        
                        <div className='flex gap-3'>
                            <div className='flex flex-col'>
                                <label><h5>First Name</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[200px] md:w-[200px] lg:w-[300px] text-black' placeholder ="First Name" />
                            </div>
                            <div className='flex flex-col'>
                                <label><h5>Last Name</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[200px] md:w-[200px] lg:w-[300px] text-black' placeholder ="Last Name" />
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <label><h5>Email</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[200px] md:w-[200px] lg:w-[500px] text-black' placeholder ="Email" />
                        </div>

                        <div className='flex gap-3'>
                            <div className='flex flex-col'>
                                <label><h5>Password</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[200px] md:w-[200px] lg:w-[300px] text-black' placeholder ="Password" />
                            </div>
                            <div className='flex flex-col'>
                                <label><h5>Confirm Password</h5></label>
                            <input type="text" className='border-2 border-white rounded-md p-2 w-[200px] md:w-[200px] lg:w-[300px] text-black' placeholder ="Confirm Password" />
                            </div>
                        </div>

                        <div className='item-end justify-end mt-5'>
                                <button className='border rounded-full w-[120px] h-[40px] font-bold text-white bg-blue-600 text-align-center'><h5> Log In</h5></button>
                             </div>
                          
                         
                              
                    </div>
                    
                    </div>



                </div>

          
           
        </div>
    );
};
