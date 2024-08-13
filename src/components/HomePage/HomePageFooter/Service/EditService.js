import axios from "axios";
import { useRef } from "react";
import { toast } from "react-toastify";

export const EditService = ({ name, detail, img, url, id }) => {
  const nameRef = useRef(name);
  const detailsRef = useRef(detail);
  const imgRef = useRef(null);
  const urlRef = useRef(url);

  const handleImage = () => {
    const data = document.getElementById('service-image').files[0];
    imgRef.current = data;
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
      url: editurl
    });

    const formData = new FormData();
    formData.append("name", editname);
    formData.append("description", editdetail);
    if (editimg) {
      formData.append("image", editimg);
    }
    formData.append("url", editurl);

    try {
      const response = await axios.patch(`https://ingnepal.org.np/api/services/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
        alert("sucessfully edited data")
      

      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      toast.error(error)
    }
  };

  return (
    <div className="p-4 w-2/3 mx-auto bg-cyan-500/30">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="font-semibold">Name</label>
          <input id="service-name" type="text" ref={nameRef} defaultValue={name} className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Details</label>
          <textarea id="service-details" ref={detailsRef} defaultValue={detail} className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Image</label>
          <input type="file" id="service-image" onChange={handleImage} className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">URL</label>
          <input id="service-url" type="url" ref={urlRef} defaultValue={url} className="p-2 border rounded-md" />
        </div>
        <div className="flex justify-end">
          <button className="bg-green-600 hover:bg-green-700 px-5 py-2 font-semibold text-lg text-white rounded-md" onClick={handleSubmit}>Submit</button>
        </div>

      </div>
    </div>
  );
};

