import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const InstanceTempleManagement = ({
  guthiName,
  members=[],
  geoLocation,
  bankAccount,
  land,
  ornaments,
  cash,
  buildings,
  img
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    <>
      <div
        className={`${isMobile ? 'h-[100px] w-[150px]' : 'h-[150px] w-[200px]'} rounded-md overflow-hidden`}
        onClick={() => setIsHidden(false)}
      >
        <div
          className="relative h-full w-full flex items-center justify-center bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={`${isMobile ? 'text-[15px]' : 'text-[25px]'} absolute h-full w-full items-center justify-center flex text-white font-bold z-40`}>
            {guthiName}
          </div>
          <div className="absolute bg-gray-900/50 h-full w-full"></div>
        </div>
      </div>

      <motion.div
        className={`${isHidden ? 'h-0 w-0' : 'h-[80%] w-[98%] md:w-[90%] lg:w-[80%]'} absolute rounded-xl bg-neutral-900/30 flex flex-col items-center justify-start z-50 backdrop-blur-lg overflow-auto transition-all duration-200 ease-out`}
      >
        <FontAwesomeIcon
          icon={faClose}
          size={'2x'}
          className="absolute top-0 right-1 text-red-600 cursor-pointer"
          onClick={() => setIsHidden(true)}
        />

        <div className="w-full py-2 bg-slate-300/40 flex flex-col items-center">
          <h1 className={`${isMobile ? 'text-[30px]' : 'text-[50px]'} text-black font-bold`}>
            {guthiName}
          </h1>
          <h3>{geoLocation}</h3>
        </div>

        <div className="flex flex-wrap mt-2 w-full">
          <div className="w-full lg:w-1/3 flex items-center flex-col">
            <img src={img} className="w-full" alt={`${guthiName}`} />
          </div>
          <div className="w-full mt-2 lg:w-2/3 flex flex-col items-center px-2">
            <p className="text-preety text-neutral-200 font-medium">
              <strong>Members:</strong> {members.join(', ')}
            </p>
            <p className="text-preety text-neutral-200 font-medium">
              <strong>Bank Account:</strong> {bankAccount}
            </p>
            <p className="text-preety text-neutral-200 font-medium">
              <strong>Land:</strong> {land}
            </p>
            <p className="text-preety text-neutral-200 font-medium">
              <strong>Ornaments:</strong> {ornaments}
            </p>
            <p className="text-preety text-neutral-200 font-medium">
              <strong>Cash:</strong> {cash}
            </p>
            <p className="text-preety text-neutral-200 font-medium">
              <strong>Buildings:</strong> {buildings}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default InstanceTempleManagement;