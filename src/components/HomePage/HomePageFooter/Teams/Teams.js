import { useTranslation } from "react-i18next";
import firstPerson from "../../../../media/Teams/p1.png";
import secondPerson from "../../../../media/Teams/p2.png";
import thirdPerson from "../../../../media/Teams/p3.png";
import fourthPerson from "../../../../media/Teams/p4.png";
import logo from "../../../../media/guthi.png";
import { useEffect } from "react";
import "./Teams.css";

import InstantTeam from "./InstantTeam";
import { AddTeam } from "./AddTeam";
import { useEditing } from "../../../../context/EditingProvider";
export const Teams = () => {
  const { t } = useTranslation();
  const { isEditing, setIsEditing } = useEditing();
  return (
    <>
      <div className="w-full h-full pb-5 flex flex-col bg-black/40 items-center">
        <img src={logo} height={200} width={200} />
        <div className="h-full w-full flex flex-col overflow-auto px-2">
          <InstantTeam
            image={secondPerson}
            name={"Dr.Shiva Raj Pandit"}
            post={"Chairman"}
            number={"9851072032"}
          />
          <InstantTeam
            image={firstPerson}
            name={"Sailesh Raj Kunwar"}
            post={"Chairman"}
            number={"9851072032"}
          />
          {isEditing && <AddTeam />}
        </div>
      </div>
    </>
  );
};
