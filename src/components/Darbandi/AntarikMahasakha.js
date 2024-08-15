import React from "react";
import InstantMahasakhaDetails from "./InstantMahasakhaDetails";

const AntarikMahasakha = () => {
  return (
    <div className="w-full h-full py-4 border-y border-black  flex justify-evenly flex-wrap">
      <div className="flex flex-col w-56 border border-black rounded-md backdrop-blur-md overflow-hidden">
        <h1 className="bg-cyan-600 text-base font-semibold text-white">
          {" "}
          आन्तरिक प्रशासन तथा सूचना प्रविधि शाखा (1)
        </h1>
        <InstantMahasakhaDetails name={"उप - प्रशासक"} />
        <InstantMahasakhaDetails name={"सहायक प्रशासक"} />
        <InstantMahasakhaDetails name={"वरिष्ठ सहायक"} />
        <InstantMahasakhaDetails name={"वरिष्ठ कम्प्युटर सहायक"} />
        <InstantMahasakhaDetails name={"कार्यालय सहायक"} />
        <InstantMahasakhaDetails name={"सवारी चालक"} />
        <InstantMahasakhaDetails name={"काार्यालय सहयोगी"} />
        <InstantMahasakhaDetails name={"सूचना प्रविधि अधिकृत"} />
        <InstantMahasakhaDetails name={"वरिष्ठ सहायक"} />
        <InstantMahasakhaDetails name={"कार्यालय सहायक"} />
      </div>
      <div className="flex flex-col w-56 border border-black rounded-md backdrop-blur-md overflow-hidden">
        <h1 className="bg-cyan-600 text-base font-semibold text-white">
          अर्थ तथा वित्त व्यवस्थापन शाखा (1)
        </h1>
        <InstantMahasakhaDetails name={"उप - प्रशासक (लेखा)"} />
        <InstantMahasakhaDetails name={"सहायक प्रशासक (लेखा)"} />
        <InstantMahasakhaDetails name={"सहायक प्रशासक (कोष नि.)"} />
        <InstantMahasakhaDetails name={"वरिष्ठ सहायक  (लेखा)"} />
        <InstantMahasakhaDetails name={"कार्यालय सहायक "} />
      </div>
      <div className="flex flex-col w-56 border border-black rounded-md backdrop-blur-md overflow-hidden">
        <h1 className="bg-cyan-600 text-base font-semibold text-white">
          भूमि व्यवस्थापन शाखा (1)
        </h1>
        <InstantMahasakhaDetails name={"उप - प्रशासक"} />
        <InstantMahasakhaDetails name={"जग्गा प्रशासन अधिकृत"} />
        <InstantMahasakhaDetails name={"अतिक्रमण व्यवस्थापन अधिकृत"} />
        <InstantMahasakhaDetails name={"वरिष्ठ सहायक"} />
        <InstantMahasakhaDetails name={"कार्यालय सहायक "} />
      </div>
      <div className="flex flex-col w-56 border border-black rounded-md backdrop-blur-md overflow-hidden">
        <h1 className="bg-cyan-600 text-base font-semibold text-white">
          कानून शाखा (1)
        </h1>
        <InstantMahasakhaDetails name={"उप - प्रशासक (कानून)"} />
        <InstantMahasakhaDetails name={"सहायक प्रशासक (कानून)"} />
        <InstantMahasakhaDetails name={"वरिष्ठ सहायक (कानून)"} />
      </div>
    </div>
  );
};

export default AntarikMahasakha;
