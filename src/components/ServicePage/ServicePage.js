import { InstanceService } from "./InstanceService"
import img from '../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg'
import bgImage from '../../media/ServicePage/architecture.png'

export const ServicePage=()=>{
    return(
        <>
        <div style={{backgroundImage:`url(${bgImage})`}} className="fixed w-screen h-screen bg-cover bg-center top-0 -z-10"></div>
        <div  className="fixed bg-zinc-800/25 bg-center top-0 w-screen h-screen"></div>
        <div className='w-full   lg:h-screen flex justify-center items-center ' >
            <div className='w-full bg-cover bg-center gap-5 flex justify-center items-center flex-wrap'>
            <InstanceService image={img} link={'sajan'} name={'sajan service'} des={'This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other '}/>
            <InstanceService image={img} link={'sajan'} name={'sajan service'} des={'This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other '}/>
            <InstanceService image={img} link={'sajan'} name={'sajan service'} des={'This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other '}/>
            <InstanceService image={img} link={'sajan'} name={'sajan service'} des={'This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other '}/>
            <InstanceService image={img} link={'sajan'} name={'sajan service'} des={'This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other '}/>
            <InstanceService image={img} link={'sajan'} name={'sajan service'} des={'This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other '}/>
            <InstanceService image={img} link={'sajan'} name={'sajan service'} des={'This setup creates a navigation bar that changes its background color and other styles when the user scrolls down the page. You can customize the styles andtup creates a navigation bar that changes its background color and other '}/>
            
            </div>
        </div>
    
        </>
    )
}