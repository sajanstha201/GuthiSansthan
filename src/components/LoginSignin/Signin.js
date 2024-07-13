import bgImage from '../../media/LoginSignin/rectangle.png'
import nepalLandmark from '../../media/LoginSignin/nepalLandmark.png'
import { Link } from 'react-router-dom'
export const Signin=()=>{
    return(
        <>
    <div class="flex justify-center flex-col items-center h-screen w-full bg-red-400 px-1 gap-3" style={{backgroundImage:`url(${bgImage})`}}>
           <h1 class="text-4xl font-bold tracker-tighter text-white">Create an account</h1>
            
           <div class="flex flex-wrap w-full  md:w-2/3 flex-shrink-0 relative ">
                <div class="  hiden lg:absolute h-96 w-96 -top-16 -left-44 lg:w-fit lg:h-fit"> <img src={nepalLandmark} height="550" width="550"/></div>
                <div class=" w-full bg-white h-96 flex justify-end">
                       <div class="  h-full w-full lg:w-2/3 py-10 px-16 lg:px-24 flex flex-col gap-2">
                            <div class="flex flex-wrap w-full  ">
                                   <div class="w-1/2 flex flex-col px-2">
                                        <label class="font-semibold text-lg">First Name</label>
                                        <input type="text" class="rounded-md border border-zinc-700 h-8"/>
                                   </div>
                                   <div class="w-1/2 flex flex-col px-2 ">
                                        <label class=" font-semibold text-lg">last Name</label>
                                        <input type="text" class="rounded-md border border-zinc-700 h-8"/>
                                   </div>
                            </div>
                            <div class="w-full flex flex-col px-2 ">
                                <label class=" font-semibold text-lg">Email</label>
                                <input type="email" class="rounded-md border border-zinc-700 h-8"/>
                           </div>
                           <div class="flex flex-wrap w-full  ">
                                <div class="w-1/2 flex flex-col px-2">
                                    <label class="font-semibold text-lg">Password</label>
                                    <input type="password" class="rounded-md border border-zinc-700 h-8"/>
                                </div>
                                <div class="w-1/2 flex flex-col px-2 ">
                                    <label class=" font-semibold text-lg">Confirm Password</label>
                                    <input type="password" class="rounded-md border border-zinc-700 h-8"/>
                                </div>
                                <Link to='/log-in'className='w-full items-center justify-center m-5'>
                                    Already Have an Account
                                </Link>
                         </div>
                          <button type="submit" class="rounded-2xl text-white font-semibold bg-[#24327E] w-fit px-8 py-2 absolute right-24 -bottom-4" > Sign up</button>
                    </div>
                </div>
           </div>

    </div>
        </>
    )
}