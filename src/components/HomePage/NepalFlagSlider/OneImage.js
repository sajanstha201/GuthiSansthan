import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setTabDetail } from "../../../state/HomePageSlices/HomePageSlice";
import axios from "axios";
import { addLanguage, fetchImageToURL } from "../../ReuseableFunctions";
import { EditImage } from "../../EditComponents";
import { setNewTabDetail } from "../../../state/HomePageSlices/HomePageSlice";
export const OneImage = ({ name, activateEdit }) => {
  const { t } = useTranslation();
  const homePageDetail = useSelector((state) => state.homePageDetail);
  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.baseUrl).backend;
  useEffect(() => {
    const fetchData = async () => {
      dispatch(
        setTabDetail({
          name: name,
          detail: baseUrl + homePageDetail["details"][name].image.substr(0),
        })
      );
      addLanguage({ key: name, lngs: homePageDetail.details[name].text });
    };
    if (!homePageDetail[name].isFetched && homePageDetail.isFetched)
      fetchData();
  });
  return (
    <>
      {activateEdit && (
        <EditImage
          isActualUploadedSame={
            homePageDetail[name].imgSrc === homePageDetail[name].actualImgSrc
          }
          setNewImage={setNewTabDetail}
          imageId={homePageDetail[name].id}
          url={homePageDetail[name].imgSrc}
          name={name}
        >
          <div
            className=" flex justify-center items-center bg-cover absolute bg-center  bg-red-500 h-44 lg:h-24 rounded-lg  "
            style={{ backgroundImage: `url(${homePageDetail[name].imgSrc})` }}
          >
            <div className="bg-zinc-800/40 absolute top-0  h-full w-full"></div>
            <h1 className="text-base font-medium z-10 lg:text-xl tracking-tighter leading-none">
              {t(name)}
            </h1>
          </div>
        </EditImage>
      )}
      {!activateEdit && (
        <div
          className=" flex justify-center items-center bg-cover relative bg-center hover:scale-110 transition-all duration-100 ease-in-out shadow-2xl  hover:shadow-red-600  h-44 w-36 lg:w-56 lg:h-64 rounded-lg overflow-hidden  "
          style={{ backgroundImage: `url(${homePageDetail[name].imgSrc})` }}
        >
          <div className="bg-zinc-900/40 backdrop-blur-[0.1px] absolute top-0  h-full w-full"></div>
          <h1 className="text-base font-semibold z-10 lg:text-4xl tracking-tighter leading-none">
            {t(name)}
          </h1>
        </div>
      )}
    </>
  );
};
