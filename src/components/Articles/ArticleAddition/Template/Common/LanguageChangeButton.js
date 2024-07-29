import {showAlert} from '../../../../AlertLoader'
export const LanguageChangeButton=({name,data,setData,language,setLanguage,nepaliText})=>{
    return(
        <>
            <div>
                <div 
                    className={`${language==='nepali'?'bg-blue-600':'bg-blue-400'} cursor-pointer flex border  rounded-md px-2 py-1`} 
                    onClick={()=>setLanguage('nepali')}>Nepali</div>
                <div
                     className={`${language==='english'?'bg-blue-600':'bg-blue-400'} cursor-pointer flex border  rounded-md px-2 py-1`} 
                     onClick={()=>{
                        nepaliText===''? showAlert('Fill Nepali Text First','red'):setLanguage('english')
                    }}>English</div>
                <div 
                    className={`${language==='newari'?'bg-blue-600':'bg-blue-400'} cursor-pointer flex border  rounded-md px-2 py-1`} 
                    onClick={()=>{
                        nepaliText===''? showAlert('Fill Nepali Text First','red'):setLanguage('newari')
                    }}>Newari</div>
                <div 
                    className={`${language==='mithila'?'bg-blue-600':'bg-blue-400'} cursor-pointer flex border  rounded-md px-2 py-1`} 
                    onClick={()=>{
                        nepaliText===''? showAlert('Fill Nepali Text First','red'):setLanguage('mithila')
                    }}>Mithila</div>
            </div>
        </>
    )
}