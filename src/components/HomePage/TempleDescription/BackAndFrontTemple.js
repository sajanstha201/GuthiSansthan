import { useState } from "react";
import "./BackAndFrontTemple.css"
import { displayTempleDescription } from "./";
import { useMediaQuery } from "@mui/material";
const images = require.context('../../../media/TempleInformation');
export const BackAndFrontTemple = ({ templeObject }) => {
    const [isRotated, setIsRotated] = useState(false);
    const isMobile=useMediaQuery('(max-width:600px)')
    const handleClick = () => {
        setIsRotated(!isRotated);
    };
    const displayTemple=()=>{
        displayTempleDescription(templeObject.imageUrl,templeObject.templeName,"sajan shresthalasjflksdj")
        document.getElementById('temple-article-div').style.top='0'
    }
    return (
        <div className="flex items-center justify-center py-2 h-full" onClick={displayTemple}>
            <div className={`bg-black h-full flex items-center justify-center m-1 ${isMobile?'min-w-[200px]':'min-w-[300px]'}`}>
            <img src={images(`.${templeObject.imageUrl}`)} alt={templeObject.nepaliName} className="max-w-full max-h-full "/>
            </div>
            
        </div>
    );
};
