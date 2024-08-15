import React, { useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { showAlert } from "../../../AlertLoader";
import { activate_loader } from "../../../AlertLoader/LoaderBox";
import { useSelector } from "react-redux";

export const AddTemple = ({ fetchTemple }) => {
  const nameRef = useRef();
  const locationRef = useRef();
  const desRef = useRef();

  const [isAddTempleActivate, setIsAddTempleActivate] = useState(false);
  const [image, setImage] = useState(null);
  const [qrCode, setQrCode] = useState(null);

  const isMobile = useMediaQuery("(max-width:800px)");
  const baseUrl = useSelector((state) => state.baseUrl).backend;
  const templeDetail = useSelector((state) => state.templeDetail);

  const handleSubmit = async () => {
    const name = nameRef.current.value.trim();
    const location = locationRef.current.value.trim();
    const des = desRef.current.value.trim();

    if (!name || !location || !image || !qrCode || !des) {
      showAlert("Enter all data", "red");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("image", image);
    formData.append("qr_code", qrCode);
    formData.append("details", des);

    try {
      setIsAddTempleActivate(false);
      activate_loader(true);
      const response = await fetch(baseUrl + templeDetail.dynamicUrl, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      showAlert("Temple Added Successfully", "green");
      fetchTemple();
    } catch (error) {
      console.error("Error:", error);
      showAlert(error.message, "red");
    } finally {
      activate_loader(false);
    }
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleQrCode = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setQrCode(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => setImage(null);
  const removeQrCode = () => setQrCode(null);

  return (
    <>
      {!isAddTempleActivate && (
        <div
          onClick={() => setIsAddTempleActivate(true)}
          className={`${
            isMobile ? "h-[100px] w-[150px]" : "h-[150px] w-[200px]"
          } hover:scale-105 bg-gray-600 rounded-md border border-white flex flex-col text-white items-center justify-center`}
        >
          <div>Add Temple</div>
          <FontAwesomeIcon icon={faPlus} size="3x" />
        </div>
      )}

      {isAddTempleActivate && (
        <div className="flex flex-col w-full h-fit gap-2 items-center justify-center">
          <div className="w-[60%] bg-white/50 backdrop-blur-sm rounded-lg text-black flex items-center flex-col justify-center px-24">
            <FontAwesomeIcon
              icon={faClose}
              size={"2x"}
              className="cursor-pointer absolute top-2 right-2 text-red-600 z-50"
              onClick={() => setIsAddTempleActivate(false)}
            />

            <h1 className="font-semibold tracking-wider my-2">
              Temple Addition Form
            </h1>

            <div className="flex w-full flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center">
              <input
                type="text"
                ref={nameRef}
                placeholder="Temple Name"
                className="w-full h-12 rounded-md px-3 py-2 border border-zinc-900"
              />
            </div>

            <div className="flex w-full flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center">
              <input
                type="text"
                ref={locationRef}
                placeholder="Temple Location"
                className="w-full h-12 rounded-md px-3 py-2 border border-zinc-900"
              />
            </div>

            <div className="flex w-full flex-wrap flex-col py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center">
              <textarea
                ref={desRef}
                placeholder="Description"
                className="w-full rounded-md h-44 px-2 py-3 border border-cyan-400"
              />
            </div>

            <div className="flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center">
              <label className="font-semibold text-lg">Upload Image:</label>
              <label
                htmlFor="temple-add-image"
                className="border-b bg-gray-500 border-black rounded-md w-64 h-64 flex justify-center items-center cursor-pointer"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                }}
              >
                {!image ? (
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-white text-2xl"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      className="w-full h-full rounded-md"
                      alt="Temple"
                    />
                    <button
                      onClick={removeImage}
                      className="absolute top-1 right-1 text-white bg-red-600 rounded-full p-1"
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </button>
                  </div>
                )}
              </label>
              <input
                type="file"
                accept=".png,.jpg,.jpeg"
                onChange={handleImage}
                id="temple-add-image"
                className="hidden"
              />
            </div>

            <div className="flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center">
              <label className="font-semibold text-lg">Upload QR Code:</label>
              <label
                htmlFor="temple-add-qr"
                className="border-b bg-gray-500 border-black rounded-md w-56 h-56 flex justify-center items-center cursor-pointer"
                style={{
                  backgroundImage: `url(${qrCode})`,
                  backgroundSize: "cover",
                }}
              >
                {!qrCode ? (
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-white text-2xl"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={qrCode}
                      className="w-full h-full rounded-md"
                      alt="QR Code"
                    />
                    <button
                      onClick={removeQrCode}
                      className="absolute top-1 right-1 text-white bg-red-600 rounded-full p-1"
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </button>
                  </div>
                )}
              </label>
              <input
                type="file"
                accept=".png,.jpg,.jpeg"
                onChange={handleQrCode}
                id="temple-add-qr"
                className="hidden"
              />
            </div>

            <div className="w-full flex justify-end px-5 gap-3 py-2">
              <button
                className="bg-red-600 px-4 py-1 rounded-md text-white font-semibold text-lg"
                onClick={() => setIsAddTempleActivate(false)}
              >
                Remove
              </button>
              <button
                className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
