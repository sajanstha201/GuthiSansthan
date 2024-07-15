import { InstanceService } from "./InstanceService"
import img from '../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg'
export const ServicePage=()=>{
    return(
        <>
        <h2>This is Service Page</h2>
        <InstanceService image={img} link={'sajan'} name={'sajan service'} />
        </>
    )
}