import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const InstantMahasakhaDetails = ({ name }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <h5
        onClick={() => setOpen(true)}
        className="text-sm font-semibold pb-1 border-b border-b-black"
      >
        {name} (1)
      </h5>
      {isOpen && (
        <div className="w-[100%} h-[100%] absolute z-20 bg-green-600 px-2 ">
          <FontAwesomeIcon
            icon={faClose}
            size={"2x"}
            className="cursor-pointer absolute top-0 right-3 text-red-600 z-50"
            onClick={() => setOpen(false)}
          />
          <h1 className="text-sm">this is {name} section</h1>
        </div>
      )}
    </>
  );
};

export default InstantMahasakhaDetails;
