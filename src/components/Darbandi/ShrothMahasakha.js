import React from "react";
import InstantMahasakhaDetails from "./InstantMahasakhaDetails";

const ShrothMahasakha = () => {
  return (
    <div className="w-full h-full bg-green-200/10 border-y border-black flex justify-evenly flex-wrap py-4">
      <div className="flex flex-col w-56 border border-black rounded-md backdrop-blur-md overflow-hidden">
        <h1 className="bg-cyan-600 text-base font-semibold text-white">
          योजना अनुगमन तथा मूल्याङ्कन शाखा (1)
        </h1>
        <InstantMahasakhaDetails name={"उप - प्रशासक योजना"} />
        <InstantMahasakhaDetails name={"सहायक प्रशासक (ईञ्जिनियर)"} />
        <InstantMahasakhaDetails name={"नापी अधिकृत "} />
        <InstantMahasakhaDetails name={"वरिष्ठ सहायक"} />
        <InstantMahasakhaDetails name={"सव - ईञ्जिजियर"} />
        <InstantMahasakhaDetails name={"सर्धेक्षक"} />
      </div>
      <div className="flex flex-col w-56 border border-black rounded-md backdrop-blur-md overflow-hidden">
        <h1 className="bg-cyan-600 text-base font-semibold text-white">
          धार्मिक तथा सांस्कृतिक सम्पदा व्यवस्था शाखा (1)
        </h1>
        <InstantMahasakhaDetails name={"उप - प्रशासक"} />
        <InstantMahasakhaDetails name={"सहायक प्रशासक"} />
        <InstantMahasakhaDetails name={"अभिलेख / पुरातत्व अधिकृत"} />
        <InstantMahasakhaDetails name={"वरिष्ठ सहायक"} />
        <InstantMahasakhaDetails name={"वरिष्ठ पुरात्व सहायक"} />
        <InstantMahasakhaDetails name={"कार्यालय सहायक"} />
      </div>
      <div className="flex flex-col w-56 border border-black rounded-md backdrop-blur-md overflow-hidden">
        <h1 className="bg-cyan-600 text-base font-semibold text-white">
          पूर्वाधार विकास तथा सम्पदा संरक्षण शाखा (1)
        </h1>
        <InstantMahasakhaDetails name={"उप - प्रशासक (प्राविधिक)"} />
        <InstantMahasakhaDetails name={"सहायक प्रशासक (ईञ्जिनियर)"} />
        <InstantMahasakhaDetails name={"वरिष्ठ सहायक"} />
        <InstantMahasakhaDetails name={"सव - ईञ्जिजियर"} />
        <InstantMahasakhaDetails name={"प्रा.स. ( सव ड्राफ्टमेन )"} />
      </div>
      <div className="flex flex-col w-56 border border-black rounded-md backdrop-blur-md overflow-hidden">
        <h1 className="bg-cyan-600 text-base font-semibold text-white">
          लेखा परीक्षण तथा वेरुजु अनुगमन शाखा (1)
        </h1>
        <InstantMahasakhaDetails name={"उप - प्रशासक (लेखा)"} />
        <InstantMahasakhaDetails name={"सहायक प्रशासक (लेखा)"} />
        <InstantMahasakhaDetails name={"वरिष्ठ सहायक"} />
        <InstantMahasakhaDetails name={"कार्यालय सहायक "} />
        <InstantMahasakhaDetails name={""} />
      </div>
    </div>
  );
};

export default ShrothMahasakha;
