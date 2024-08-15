import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export const EditService = ({ name, detail, img, url, id }) => {
  const nameRef = useRef(name);
  const detailsRef = useRef(detail);
  const imgRef = useRef(null);
  const urlRef = useRef(url);
  const [imageSrc, setImageSrc] = useState();

  const handleImage = () => {
    const data = document.getElementById("service-image").files[0];
    imgRef.current = data;
  };
  const uploadImage = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(URL.createObjectURL(new Blob([e.target.result])));
    };
    reader.readAsArrayBuffer(
      document.getElementById("service-addition-image").files[0]
    );
  };

  const handleSubmit = async () => {
    const editname = nameRef.current.value.trim();
    const editdetail = detailsRef.current.value.trim();
    const editimg = imgRef.current;
    const editurl = urlRef.current.value.trim();

    // Log data before sending to server
    console.log("Submitting Data:", {
      name: editname,
      detail: editdetail,
      img: editimg ? editimg.name : "No new image selected",
      url: editurl,
    });

    const formData = new FormData();
    formData.append("name", editname);
    formData.append("description", editdetail);
    if (editimg) {
      formData.append("image", editimg);
    }
    formData.append("url", editurl);

    try {
      const response = await axios.patch(
        `https://ingnepal.org.np/api/services/${id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("sucessfully edited data");

      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      toast.error(error);
    }
    const uploadImage = () => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(URL.createObjectURL(new Blob([e.target.result])));
      };
      reader.readAsArrayBuffer(
        document.getElementById("service-addition-image").files[0]
      );
    };
  };

  return (
    <div className="p-4 w-2/3 mx-auto bg-cyan-500/30">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="font-semibold">Name</label>
          <input
            id="service-name"
            type="text"
            ref={nameRef}
            defaultValue={name}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Details</label>
          <textarea
            id="service-details"
            ref={detailsRef}
            defaultValue={detail}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex w-full flex-col justify-center py-1 border-y-2 border-b-zinc-700/5  gap-2 items-center">
          {!imageSrc && (
            <>
              <label
                htmlFor="service-addition-image"
                className="flex w-[150px] h-[150px] bg-gray-500 rounded-md items-center justify-center flex-col cursor-pointer hover:scale-105 transition-all duration-300 border border-white"
              >
                <div className="text-[20px]">Upload Image</div>
                <FontAwesomeIcon icon={faPlus} size="3x" />
              </label>
            </>
          )}
          <input
            id="service-addition-image"
            type="file"
            accept=".png,.jpeg,.jpg"
            className="hidden"
            onChange={() => uploadImage()}
          ></input>
          {imageSrc && (
            <div className="flex flex-row ">
              <div className="flex w-[150px] h-[150px] rounded-md items-center justify-center flex-col cursor-pointer overflow-hidden">
                <img src={imageSrc}></img>
              </div>
              <div
                className="flex h-fit w-fit items-center justify-center px-2 bg-red-600 text-white cursor-pointer hover:bg-red-700 rounded-md m-1 py-2"
                onClick={() => setImageSrc()}
              >
                Remove
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">URL</label>
          <input
            id="service-url"
            type="url"
            ref={urlRef}
            defaultValue={url}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-green-600 hover:bg-green-700 px-5 py-2 font-semibold text-lg text-white rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
