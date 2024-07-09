import { useState } from "react";
import "./BackAndFrontTemple.css"
import { displayTempleDescription } from "./";
const images = require.context('../../../media/TempleInformation');
export const BackAndFrontTemple = ({ templeObject }) => {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
    };
    const displayTemple=()=>{
        displayTempleDescription(templeObject.imageUrl,templeObject.templeName,"sajan shresthalasjflksdj")
        document.getElementById('temple-article-div').style.top='0'
    }
    return (
        <div className="flex items-center max-h-fulljustify-center m-2  min-w-[300px] perspective">
            <div className={`relative  w-full transform-style preserve-3d transition-transform duration-700 ${isRotated ? 'rotate-y-180' : ''}`} onClick={handleClick} onDoubleClick={displayTemple}>
                <div className="absolute w-full h-full bg-black flex items-center justify-center backface-hidden ">
                    <img src={images(`.${templeObject.imageUrl}`)} alt={templeObject.nepaliName} />
                </div>
                <div className="absolute w-full h-full bg-white flex items-center justify-center backface-hidden rotate-y-180 p-2">
                    This is Pashupathi Temple and it is one of the famous temples in Kathmandu.
                </div>
            </div>
        </div>
    );
};
