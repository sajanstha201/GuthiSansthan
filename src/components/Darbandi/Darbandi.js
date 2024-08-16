import React, { useState } from "react";
import ShrothMahasakha from "./ShrothMahasakha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import AntarikMahasakha from "./AntarikMahasakha";

const Darbandi = () => {
  const [mahasakha, setmahasakha] = useState(null);
  const sakha = [
    { name: "गुठी संस्थान शाखा कार्यालय काठमाडौं" },
    { name: "गुठी संस्थान शाखा कार्यालय ललितपुर" },
    { name: "गुठी संस्थान शाखा कार्यालय भक्तपुर" },
    { name: "गुठी संस्थान शाखा कार्यालय काभ्रेपलाञ्चोक" },
    { name: "केन्द्रीय लगत तथा अभिलेख शाखा कार्यालय भद्रकाली" },
    { name: "पशुपती गोश्वारा कार्यालय पशुपती" },
    { name: "गुठी संस्थान शाखा कार्यालय पर्सा" },
    { name: "गुठी संस्थान शाखा कार्यालय धनुषा जनकपुरधाम" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-8    ">
      <h3 className="font-bold">गुठी संस्थान</h3>
      <div className="flex flex-col  items-center border border-black w-64 rounded-sm ">
        <h4 className="bg-green-500 w-full py-1 font-semibold text-base">
          गुठी संस्थान सञ्चालक समिति
        </h4>
        <h6 className="text-red-500 text-sm w-full text-wrap">
          अध्यक्ष -१ सदस्य -७ सचिव (प्रशासक) - १ जम्मा ९ जना
        </h6>
      </div>

      <h4 className="bg-green-500 w-64 h-full border border-black  py-1 font-semibold text-base">
        प्रशासक( कार्यकारी प्रमुख ) गुठी संस्थान सञ्चालक समिति
      </h4>
      <div className="w-full bg-blue-500 h-1"></div>
      <div className="flex flex-col w-full items-center">
        <div className="w-full flex justify-between px-2">
          <div className="px-4 bg-gray-300 flex flex-col h-fit border border-black">
            <h4 className="font-semibold text-sm">जनगुनासो व्यवस्थापन ईकाई </h4>
            <h4 className="font-semibold text-sm text-red-500">
              (फोकल प्वाईन्ट नोडल अधिकृत )
            </h4>
          </div>

          <div className="flex flex-col items-start gap-1 ">
            <div className="px-4 bg-gray-300 flex flex-col border border-black">
              <h4 className="font-semibold text-sm">
                जनगुनासो व्यवस्थापन ईकाई{" "}
              </h4>
              <h4 className="font-semibold text-sm text-red-500">
                (फोकल प्वाईन्ट नोडल अधिकृत )
              </h4>
            </div>
            <h6 className="font-semibold">अधिकृत तृतीय -१</h6>
            <h6 className="font-semibold">वरिष्ठ सहायक -१</h6>
            <h6 className="font-semibold">कार्यालय सहयोगी -२</h6>
          </div>
        </div>
        <div className="flex flex-col  items-center bg-yellow-300 h-fit border mt-10 border-black w-64  rounded-sm ">
          <h4 className="bg-green-500 w-full py-1 font-semibold text-base">
            गुठी संस्थान प्रधान कार्यालय
          </h4>
          <h6 className=" text-sm w-full text-black text-wrap  h-full">79</h6>
        </div>
        <div className="w-1 h-6 bg-black"></div>
        <div className="w-[90%] h-1 bg-black "></div>
        <div className="flex justify-between w-full lg:px-4">
          <div className="flex flex-col items-start ">
            <div
              className="px-2 border border-black rounded-sm py-1 hover:cursor-pointer hover:bg-cyan-700 bg-cyan-500 "
              onClick={() => setmahasakha("shroth")}
            >
              <h4 className="font-semibold text-sm text-white">
                श्रोत व्यवस्थापन तथा अनुगमन महाशाखा
              </h4>
            </div>
            {mahasakha === "shroth" && (
              <>
                <h4 className="font-semibold text-sm ">सह प्रशासक (1) </h4>
                <h4 className="font-semibold text-sm ">वरिष्ठ सहायक (1) </h4>
                <h4 className="font-semibold text-sm ">कार्यालय सहयोगी (1) </h4>
              </>
            )}
          </div>
          <div className="flex flex-col items-start ">
            <div
              className="px-2 border border-black rounded-sm py-1 hover:cursor-pointer hover:bg-cyan-700 bg-cyan-500"
              onClick={() => setmahasakha("antarik")}
            >
              <h4 className="font-semibold text-sm text-white">
                आन्तरिक व्यवस्थापन महाशाखा
              </h4>
            </div>
            {mahasakha === "antarik" && (
              <>
                <h4 className="font-semibold text-sm ">सह प्रशासक (1) </h4>
                <h4 className="font-semibold text-sm ">वरिष्ठ सहायक (1) </h4>
                <h4 className="font-semibold text-sm ">कार्यालय सहयोगी (1) </h4>
              </>
            )}
          </div>
        </div>
      </div>
      {mahasakha && (
        <div className="relative w-full">
          <FontAwesomeIcon
            icon={faClose}
            size={"2x"}
            className="cursor-pointer absolute top-0 right-3 text-red-600 z-50"
            onClick={() => setmahasakha(false)}
          />
          {mahasakha === "shroth" && <ShrothMahasakha />}
          {mahasakha === "antarik" && <AntarikMahasakha />}
        </div>
      )}
      <div className="flex flex-wrap gap-3 justify-center">
        {sakha.map((items) => (
          <h4 className="bg-cyan-500 rounded-sm px-2 py-1 max-w-40 font-semibold text-sm">
            {items.name}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Darbandi;
