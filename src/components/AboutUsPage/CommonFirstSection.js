import { useMediaQuery } from '@mui/material';
import { useEffect, useState, useRef } from 'react';

export const CommonFirstSection = ({ img, topic, visibleDesc, HiddenDiv }) => {
  const hiddenRef = useRef(null);
  const isMobile = useMediaQuery('(max-width:800px)');
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setIsHidden(true);
  }, [topic]);

  const handleScroll = () => {
    hiddenRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="flex flex-col w-full backdrop-blur-sm text-white z-0" ref={hiddenRef}>
      <div className={`${isMobile ? 'flex-col' : 'flex-row'} flex w-full`}>
        {isMobile && <h1>{topic}</h1>}
        <div className={`${isMobile ? 'w-full justify-center' : 'mt-[5%] ml-[5%] justify-end'} flex items-center h-[25vh]`}>
          <img src={img} className="max-h-[100%] rounded-md" alt="Description" />
        </div>
        <div className={`${isMobile ? 'w-full text-center px-2 pt-2' : 'w-[60%] text-left px-5 pt-5'} flex flex-col items-center`}>
          {!isMobile && <h1>{topic}</h1>}
          <p>
            {visibleDesc}
            <span 
              onClick={() => { setIsHidden(false); setTimeout(()=>handleScroll(),200) }}
              className={`${isHidden ? '' : 'hidden'} cursor-pointer underline text-blue-600`}
            >
              more info
            </span>
          </p>
        </div>
      </div>
      <div className={`${isHidden ? 'hidden' : ''} mb-5`} >
        <HiddenDiv />
      </div>
    </div>
  );
};
