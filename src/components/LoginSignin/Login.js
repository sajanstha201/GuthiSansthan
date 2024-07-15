import React from 'react';
import bgImage from '../../media/LoginSignin/rectangle.png'
import nepalLandmark from '../../media/LoginSignin/nepalLandmark.png'

export const Login = () => {
    return (
  
        <div
            className="bg-cover bg-center h-screen "
            style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: 'fixed' }}
        >
           
                

                <div className='flex items-center justify-center gap-5 h-[80vh] flex-col md:flex-row lg:flex-row'>
                    <div  >
                      <img src={nepalLandmark}  className=' h-100 sm:w-[400px] w-400  md:w-500   lg:w-500 sm:mt-[50px]  '></img>
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
                                <button className='border rounded-full w-[120px] h-[40px] font-bold text-white bg-blue-600 text-align-center'><h5> Sign In</h5></button>
                             </div>
                              
                    </div>
                    
                    </div>



                </div>

          
           
        </div>
    );
};
