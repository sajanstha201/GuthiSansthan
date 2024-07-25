import { InstanceService } from "./InstanceService"
import img from '../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg'
import bgImage from '../../media/ServicePage/architecture.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";
import {useSelector} from 'react-redux'
import { useEffect } from "react";
import axios from "axios";
export const ServicePage=()=>{
  const servicePageDetail=useSelector(state=>state.servicePageDetail)
  const isMobile=useMediaQuery('(max-width:800px)')
  const baseUrl=useSelector(state=>state.baseUrl).backend
  useEffect(()=>{
    const fetchData=async ()=>{
      const response=await axios.get(baseUrl+servicePageDetail.url)
      console.log(response.data)
    }
    if(!servicePageDetail.isFetched){
      fetchData()
    }
  },[])
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const data =[
        {image:img,
         name:"sajan ",   
          des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
        },
        {image:img,
         name:"sajan ",   
          des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
        },
        {image:img,
         name:"sajan ",   
          des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
        },
        {image:img,
         name:"sajan ",   
          des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
        },
        {image:img,
         name:"sajan ",   
          des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
        },
        {image:img,
         name:"sajan ",   
          des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
        },
        {image:img,
         name:"sajan ",   
          des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
        },
        {image:img,
          name:"sajan ",   
           des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
         },
         {image:img,
          name:"sajan ",   
           des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
         },
         {image:img,
          name:"sajan ",   
           des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
         },
         {image:img,
          name:"sajan ",   
           des:"This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other "
         },
    ]
    return(
        <div className="">
        <div style={{backgroundImage:`url(${bgImage})`}} className="fixed w-full h-screen bg-cover bg-center top-0 -z-10 blur-[1px] bg-zinc-800/50"></div>
        <div  className="fixed w-full h-screen bg-cover bg-right-bottom top-0 -z-10 blur-[1px]  bg-black/50 "></div>
        <div className="text-[60px] text-white  font-bold h-[30vh] flex items-center justify-center "><div className="z-1 text-white ">Our Services</div></div>
              <div className='flex w-full items-center justify-center'>
          {isMobile&&<Slider className="bg-black/40  flex justify-center px-4 w-[80%] " {...settings}>
                {data.map((d,index)=>(
                    <InstanceService className="hover:scale-95" key={index} image={d.image} name={d.name} des={d.des}/>
                ))}
            </Slider>}
            {!isMobile&&<div className="w-[90%] flex flex-wrap gap-10  justify-center rounded-xl">
              {data.map((d,index)=>(
                    <InstanceService className="hover:scale-95" key={index} image={d.image} name={d.name} des={d.des}/>
                ))}
            </div>}
            </div>
        
       
        </div>
    )

}