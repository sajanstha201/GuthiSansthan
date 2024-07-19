import { InstanceService } from "./InstanceService"
import img from '../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg'
import bgImage from '../../media/ServicePage/architecture.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";
export const ServicePage=()=>{
  const isMobile=useMediaQuery('(max-width:800px)')
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
    ]
    return(
        <>
        <div style={{backgroundImage:`url(${bgImage})`}} className="fixed w-screen h-screen bg-cover bg-center top-0 -z-10 blur-[1px]"></div>
        <div  className="fixed w-screen h-screen bg-cover bg-right-bottom top-0 -z-10 blur-[1px] bg-zinc-800/50"></div>
        <div className="text-[60px] text-white  font-bold h-[30vh] flex items-center justify-center "><div className="z-1 text-white ">Our Services</div></div>
              <div className='lg:mx-64  '>
          {isMobile&&<Slider className="bg-red-500/20 px-1 flex gap-2 lg:px-12 w-full " {...settings}>
                {data.map((d,index)=>(
                    <InstanceService className="hover:scale-95" key={index} image={d.image} name={d.name} des={d.des}/>
                ))}
            </Slider>}
            {!isMobile&&<>
              {data.map((d,index)=>(
                    <InstanceService className="hover:scale-95" key={index} image={d.image} name={d.name} des={d.des}/>
                ))}
            </>}
            </div>
        
       
        </>
    )

}