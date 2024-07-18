import i18next from "i18next";
export function addLanguage({key,nepali,english,newari,mithila}){
    const lngs=[nepali,english,newari,mithila]
    const lngList=['nepali','english','newari','mithila']
    lngs.map((value,index)=>{
        if(typeof value !=='undefined'){
            i18next.addResource(lngList[index],'translation',key,value)
            console.log(key,value)
        }
        })
}