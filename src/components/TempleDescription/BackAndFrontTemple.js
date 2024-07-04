import { useState } from "react";
import "./BackAndFrontTemple.css"
const images = require.context('../../media/TempleInformation');

export const BackAndFrontTemple = ({ templeObject }) => {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <div className="flex items-center justify-center m-2 min-h-[300px] min-w-[300px] max-h-full perspective">
            <div className={`relative h-[80%] w-full transform-style preserve-3d transition-transform duration-700 ${isRotated ? 'rotate-y-180' : ''}`} onClick={handleClick}>
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
