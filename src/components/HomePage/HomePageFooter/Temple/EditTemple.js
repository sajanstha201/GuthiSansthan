import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { showAlert } from "../../../AlertLoader";
import { activate_loader } from "../../../AlertLoader/LoaderBox";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

export const EditTemple = ({
  name,
  detail,
  location,
  templeDetail,
  templeId,
  fetchAllTemple,
  img,
  qr,
}) => {
  const [editName, setEditName] = useState(name);
  const [editLocation, setEditLocation] = useState(location);
  const [editDetail, setEditDetail] = useState(detail);
  const [image, setImage] = useState(img);
  const [qrCode, setQrCode] = useState(qr);

  const baseUrl = useSelector((state) => state.baseUrl).backend;
  const isMobile = useMediaQuery("(max-width:800px)");

  const saveEdits = async () => {
    try {
      activate_loader(true);
      const formData = new FormData();
      formData.append("name", editName);
      formData.append("location", editLocation);
      formData.append("detail", editDetail);
      if (image) formData.append("image", image);
      if (qrCode) formData.append("qr_code", qrCode);

      await axios.patch(
        `${baseUrl}${templeDetail.dynamicUrl}${templeId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      fetchAllTemple();
      showAlert("Edited " + editName, "green");
    } catch (error) {
      console.error(error);
      showAlert(error.message || "Failed to update temple", "red");
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
      <div className="w-full py-2 bg-white/40 flex flex-col items-center px-10">
        <h1
          className={`${
            isMobile ? "text-[30px]" : "text-[50px]"
          } text-black font-bold`}
        >
          Edit Temple
        </h1>

        <div className="flex w-full py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center">
          <input
            value={editName}
            type="text"
            placeholder="Temple Name"
            onChange={(e) => setEditName(e.target.value)}
            className="w-full h-12 rounded-md px-3 py-2 border border-zinc-900"
          />
        </div>

        <div className="flex w-full py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center">
          <input
            value={editLocation}
            type="text"
            placeholder="Temple Location"
            onChange={(e) => setEditLocation(e.target.value)}
            className="w-full h-12 rounded-md px-3 py-2 border border-zinc-900"
          />
        </div>

        <div className="flex flex-wrap w-full">
          <div className="flex flex-col flex-wrap py-1 border-y-2 w-1/2 border-b-zinc-700/5 gap-2 items-center">
            <div className="flex flex-col items-center">
              <label
                className="font-semibold text-lg mb-2 text-white"
                htmlFor="temple-edit-image"
              >
                Upload Image:
              </label>
              <label
                htmlFor="temple-edit-image"
                className="border-b bg-gray-500 border-black rounded-md w-64 h-fit min-h-44 flex justify-center items-center cursor-pointer"
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
                id="temple-edit-image"
                className="hidden"
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="font-semibold text-lg mb-2 text-white">
                Upload QR Code:
              </label>
              <label
                htmlFor="temple-edit-qr"
                className="border-b bg-gray-500 border-black rounded-md w-56 min-h-56 flex justify-center items-center cursor-pointer"
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
                id="temple-edit-qr"
                className="hidden"
              />
            </div>
          </div>

          <div className="flex w-1/2 py-1 border-y-2 border-b-zinc-700/5 flex-col gap-2">
            <label className="text-white font-semibold text-lg">
              Description
            </label>
            <textarea
              value={editDetail}
              placeholder="Description"
              onChange={(e) => setEditDetail(e.target.value)}
              className="w-full rounded-md h-44 px-2 py-3 border border-cyan-400"
            />
          </div>
        </div>

        <div className="w-full flex justify-end px-5 gap-3 py-2">
          <button
            className="bg-green-600 px-4 py-1 rounded-md text-white font-semibold text-lg"
            onClick={saveEdits}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
