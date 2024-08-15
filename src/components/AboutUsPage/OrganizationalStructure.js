import img from "../../media/AboutUsPage/shechen-tennyi-dargyeling-golden-temple-in-kathmandu-nepal.jpg";
import { useTranslation } from "react-i18next";
import { displayMoreDescription } from "../DisplayInfo/MoreDescription";
import { useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { CommonFirstSection } from "./CommonFirstSection";
import { useEffect } from "react";
export const OrganizationalStructure = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:800px)");
  const navigate = useNavigate("");

  return <Link to={"/darbandi"}></Link>;
};
const HiddenDiv = () => {
  return <>This is hidden OrganizationalStructure</>;
};
