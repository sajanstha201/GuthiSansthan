import { styled, useMediaQuery } from "@mui/material";
import { useSelectLanguage } from "../../context/LanguageChoice";
import { useTranslation } from "react-i18next";
import nepalLogo from "../../media/nepalLogo.png";
import logo from "../../media/guthi.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { HeaderButtom } from "./HeaderButtom";
import { useEffect, useRef, useState } from "react";
import { Language } from "./Language";
import { useSelector, useDispatch } from "react-redux";
import { fetchImageToURL } from "../ReuseableFunctions";
import { setNewGuthiSansthanLogo, setLngLogo } from "../../state/GlobalSlice";
import { EditImage } from "../EditComponents";
import { useEditing } from "../../context/EditingProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export const HeaderTop = () => {
  const globalDetail = useSelector((state) => state.globalDetail);
  const isMobile = useMediaQuery("(max-width:800px)");
  const { isEditing, setIsEditing } = useEditing();
  const { selectLanguage, setSelectLanguage } = useSelectLanguage();
  const { i18n, t } = useTranslation();
  const loc = useLocation();
  const [languageOptionHidden, setLanguageOptionHidden] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();
  const dropdownRef = useRef();
  const dispatch = useDispatch();
  const baseUrl = useSelector((state) => state.baseUrl).backend;
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setLanguageOptionHidden(true);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLanguageClick = (lang) => {
    setSelectLanguage(lang);
    i18n.changeLanguage(lang);
    setLanguageOptionHidden(true);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        isMobile ? "h-[80px] flex-wrap w-full" : "flex-row px-20 h-[100px]"
      } flex w-full bg-neutral-100/50 lg:bg-neutral-200/30 lg:backdrop-blur-lg backdrop-blur-xl top-0 justify-between items-center p-2`}
    >
      <Link
        to="/"
        className={`${
          isMobile
            ? "flex-col justify-start items-center w-[50%]"
            : "flex-row w-[30%] items-center"
        } h-full flex-row flex`}
        onClick={(e) => {
          isEditing && e.preventDefault();
        }}
      >
        <img
          className={`${isMobile ? "h-[50px]" : "h-[80px]"}`}
          src={nepalLogo}
          alt="Nepal Logo"
        />
        <EditImage
          imageId={globalDetail["guthi-sansthan-logo"].id}
          url={baseUrl + globalDetail.url}
          setNewImage={setNewGuthiSansthanLogo}
          isActualUploadedSame={
            globalDetail["guthi-sansthan-logo"].imgSrc ===
            globalDetail["guthi-sansthan-logo"].actualImgSrc
          }
        >
          <img
            className={`${
              isMobile ? "h-[50px] pr-4" : "h-[80px] pr-10"
            } rounded-full `}
            src={globalDetail["guthi-sansthan-logo"].imgSrc}
            alt="Guthi Sansthan Logo"
          />
        </EditImage>
      </Link>
      {!isMobile && (
        <>
          {isEditing ? (
            <div
              className="bg-red-700 flex items-center justify-center py-2 px-3 cursor-pointer rounded-md"
              onClick={() => setIsEditing(false)}
            >
              Deactivate Editing
            </div>
          ) : (
            <div
              className="bg-green-700 flex items-center justify-center py-2 px-3 cursor-pointer rounded-md"
              onClick={() => setIsEditing(true)}
            >
              Activate Editing
            </div>
          )}
        </>
      )}

      {loc.pathname !== "/" && !isMobile && (
        <div
          className={`${
            isMobile ? "h-[100px]" : ""
          } w-[40%] flex items-center justify-center`}
        >
          <HeaderButtom />
        </div>
      )}
      <div
        className={`${
          isMobile ? "gap-1 w-[50%]" : "gap-7 w-[30%]"
        } relative flex-row flex h-full items-center justify-start px-2`}
      >
        <div
          ref={divRef}
          className={`gap-1 w-[40%] relative flex-row flex items-center justify-end`}
        >
          {/* <div className="text-[10px] lg:text-[20px] font-semibold bg-gray-900/40 px-3 py-1 flex justify-center text-white items-center">
            Language
          </div> */}
          <div className="relative bg-gray-300/70 rounded-full flex flex-row items-center justify-center">
            <div
              className={`h-[30px] w-[30px] md:h-[60px] md:w-[60px] cursor-pointer transition-all rounded-md p-1 items-center flex justify-center`}
              onClick={() => {
                setLanguageOptionHidden(!languageOptionHidden);
              }}
            >
              <div className="z-30 p-2 overflow-hidden h-full w-full items-center flex justify-center">
                {selectLanguage === "nepali" && (
                  <img
                    sizes="2x"
                    src={globalDetail["lng-logo"]["nepali"]}
                    alt="Nepali Language"
                  />
                )}
                {selectLanguage === "newari" && (
                  <img
                    sizes="2x"
                    src={globalDetail["lng-logo"]["newari"]}
                    alt="Newari Language"
                  />
                )}
                {selectLanguage === "english" && (
                  <img
                    sizes="2x"
                    src={globalDetail["lng-logo"]["english"]}
                    alt="English Language"
                  />
                )}
                {selectLanguage === "mithila" && (
                  <img
                    sizes="2x"
                    src={globalDetail["lng-logo"]["mithila"]}
                    alt="Mithila Language"
                  />
                )}
              </div>

              <div
                className={`${
                  languageOptionHidden ? "opacity-0 h-0" : "opacity-100"
                } absolute flex flex-col gap-2 items-center top-[110%] left-0 bg-gray-300/70 z-20 transition-all duration-500 rounded-md`}
              >
                {["nepali", "newari", "english", "mithila"]
                  .filter((lng) => lng !== selectLanguage)
                  .map((key, index) => (
                    <Language
                      name={key}
                      key={index}
                      handleLanguageClick={handleLanguageClick}
                      img={globalDetail["lng-logo"][key]}
                      no={index}
                      languageOptionHidden={languageOptionHidden}
                    ></Language>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {!token && (
          <Link
            to="/sign-up"
            className={`${
              isMobile ? "text-[12px] " : " px-5 py-1"
            } no-underline  bg-red-600 py-1 text-white flex items-center justify-center mx-2 rounded-full hover:bg-red-700 cursor-pointer shadow-sm font-bold`}
          >
            {t("sign-up")}
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </Link>
        )}
        {token && (
          <div
            ref={dropdownRef}
            className="absolute right-4 inline-block text-left text-white hover:text-blue-500"
          >
            <div
              onClick={toggleDropdown}
              className="cursor-pointer flex items-center"
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                size="3x"
                className="text-white hover:text-blue-500"
              />
            </div>
            {isOpen && (
              <div className="absolute right-0 flex flex-col items-start gap-2 px-1 bg-zinc-700/30 backdrop-blur-sm border border-gray-300 rounded-lg shadow-lg z-10">
                <Link
                  to="/user/profile"
                  className="text-white hover:text-red-500 no-underline w-full border-b border-white"
                >
                  Profile
                </Link>
                <Link
                  to="/user/setting"
                  className="text-white hover:text-red-500 no-underline w-full border-b border-white"
                >
                  Setting
                </Link>
                <button
                  onClick={handleLogOut}
                  className="flex text-white hover:text-red-500 gap-2 items-center"
                >
                  Logout <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
