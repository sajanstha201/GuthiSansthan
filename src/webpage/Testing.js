import {ImageSlider} from '../components/DisplayInfo'
import pashupathi from '../media/TempleInformation/pashupati.jpeg'
import bouddhnath from '../media/TempleInformation/bouddhanath.jpeg'
import patandurbarsquare from '../media/TempleInformation/patandurbarsquare.png'
import janaki from '../media/TempleInformation/janaki.jpeg'
import { TemplesDisplayMain } from '../components/HomePage/TempleDescription'
export const Testing=()=>{
    return(
        <>
        <h1>This is Testing Section</h1>
        <div>
        <ImageSlider imagesList={[pashupathi,bouddhnath,patandurbarsquare,janaki]}/>
        <TemplesDisplayMain/>
        </div>
        </>
    )
}