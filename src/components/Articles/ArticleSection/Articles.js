import { InstanceArticles } from "./InstanceArticles"
import bg from '../../../media/Article/pasupatibg.jpg'
import { motion } from "framer-motion"
import { duration } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
export const Articles=()=>{
    const[data,setData]=useState()
    useEffect(()=>{
        try{
            const response = axios.get("https://guthi.pythonanywhere.com/api/articles/")
            setData(response.json())
            console.log(response.json());
            if(!response.ok){
                throw new Error("Network connection Error")
            }
        }catch(error){
            console.log(error)
        }
    })
    return(
        <>
            <motion.div initial={{y:200 , opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.2,delay:0.5} } className="w-full bg-white p-1 rounded-md overflow-hidden mt-2" >
               { data ? data.map(()=>(

<InstanceArticles  img={bg} title={'Title'} desc={'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit debitis dicta, provident, similique laudantium reiciendis aut, iure distinctio in dolorem facere fugit sed atque incidunt ipsum fuga? Ullam, ducimus harum?'}/>
               )):<h1>Empty articles</h1>

               }
             
            </motion.div>
        </>
    )
}