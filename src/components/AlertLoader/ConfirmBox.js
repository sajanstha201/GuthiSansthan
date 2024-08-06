import { useState } from "react"
import { activate_loader } from "./LoaderBox"

export const ConfirmBox=()=>{
    return(
        <div className=" fixed  z-50 items-center justify-center flex backdrop-blur overflow-hidden" id="confirm-box-div" style={{height:'0%',width:'0%'}}>
            <div className="h-[200px] w-[400px] bg-gray-400 rounded-md flex flex-col items-center justify-center gap-5">
                <div className=" text-white font-bold text-[20px]" id="confirm-box-information">
                    Do you want to delete?
                </div>
                <div className="rounded-md flex flex-row items-center justify-center gap-5 text-white">
                    <div id='confirm-box-reject-div'className="bg-red-600 hover:bg-red-700 cursor-pointer px-3 py-2 w-fit h-fit rounded-md" >Reject</div>
                    <div id='confirm-box-confirm-div' className="bg-green-600 hover:bg-green-700 cursor-pointer px-3 py-2 w-fit h-fit rounded-md">Confrim</div>
                </div>
            </div>
        </div>
    )
}
export function showConfirmBox(information){
    return new Promise((resolve,reject)=>{
        document.getElementById('confirm-box-div').style.height='100%'
        document.getElementById('confirm-box-div').style.width='100%'
        document.getElementById('confirm-box-information').innerHTML=information
        const handleReject=()=>{
            cleanup()
            resolve(false);
        }
        const handleConfirm=()=>{
            cleanup()
            resolve(true);
        }
        document.getElementById('confirm-box-reject-div').addEventListener('click',handleReject)
        document.getElementById('confirm-box-confirm-div').addEventListener('click',handleConfirm)
        const cleanup=()=>{
            document.getElementById('confirm-box-div').style.height='0%'
            document.getElementById('confirm-box-div').style.width='0%'
            document.getElementById('confirm-box-reject-div').removeEventListener('click',handleReject)
            document.getElementById('confirm-box-confirm-div').removeEventListener('click',handleConfirm)
        }
    })

}