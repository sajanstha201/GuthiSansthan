import bgImage from '../../media/LoginSignin/rectangle.png'
import nepalLandmark from '../../media/LoginSignin/nepalLandmark.png'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
export const Signin=()=>{
    const isMobile=useMediaQuery('(max-width:800px)')
    const {t}=useTranslation()
    return(
        <>
    <div class="flex justify-center flex-col items-center h-screen w-full bg-red-400 px-1 gap-3" style={{backgroundImage:`url(${bgImage})`}}>
           <h1 class="text-4xl font-bold tracker-tighter text-white">{t('create-an-account')}</h1>
            
           <div class="flex flex-wrap w-full  md:w-2/3 flex-shrink-0 relative ">
                <div class="  hiden lg:absolute h-96 w-96 -top-16 -left-44 lg:w-fit lg:h-fit"> <img src={nepalLandmark} height="550" width="550"/></div>
                <div class=" w-full bg-white h-96 flex justify-end">
                       <div class="  h-full w-full lg:w-2/3 py-10 px-16 lg:px-24 flex flex-col gap-2">
                            <div class={` ${isMobile?'flex-col':'flex-row'} flex  w-full  `}>
                                   <div class="w-full flex flex-col px-2">
                                        <label class="font-semibold text-lg">{t('first-name')}</label>
                                        <input type="text" class="rounded-md border border-zinc-700 h-8"/>
                                   </div>
                                   <div class="w-full flex flex-col px-2 ">
                                        <label class=" font-semibold text-lg">{t('last-name')}</label>
                                        <input type="text" class="rounded-md border border-zinc-700 h-8"/>
                                   </div>
                            </div>
                            <div class="w-full flex flex-col px-2 ">
                                <label class=" font-semibold text-lg">{t('email')} </label>
                                <input type="email" class="rounded-md border border-zinc-700 h-8"/>
                           </div>
                           <div class={`${isMobile?'flex-col':'flex-row'} flex w-full  `}>
                                <div class="w-full flex flex-col px-2">
                                    <label class="font-semibold text-lg">{t('password')} </label>
                                    <input type="password" class="rounded-md border border-zinc-700 h-8"/>
                                </div>
                                <div class="w-full flex flex-col px-2 ">
                                    <label class=" font-semibold text-lg">{t('confirm-password')}</label>
                                    <input type="password" class="rounded-md border border-zinc-700 h-8"/>
                                </div>

                         </div>
                         <Link to='/log-in'className='w-full items-center justify-center'>
                         {t('already-have-an-account')}
                                </Link>
                          <button type="submit" class="rounded-2xl text-white font-semibold bg-[#24327E] w-fit px-8 py-2 absolute right-24 -bottom-4" >{t('sign-up')}</button>
                    </div>
                </div>
           </div>

    </div>
        </>
    )
}