import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const AddServiceForm = ({ onServiceAdded }) => {
    const [formData, setFormData] = useState({
        name: "",
        url: "",
        image: null,
        description: ""
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("url", formData.url);
        data.append("image", formData.image);
        data.append("description", formData.description);

        try {
            const response = await axios.post('https://guthi.pythonanywhere.com/api/services/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status !== 201) {
                throw new Error("Something went wrong");
            }
            toast.success("Service added successfully!");
            onServiceAdded(response.data); // Call the callback function to update the parent component
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto mt-10">
            <h1 className="text-white text-3xl mb-5">Add Service</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Service Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 rounded"
                    required
                />
                <input
                    type="url"
                    name="url"
                    placeholder="Service URL"
                    value={formData.url}
                    onChange={handleChange}
                    className="p-2 rounded"
                    required
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="p-2 rounded"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Service Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Add Service
                </button>
            </form>
        </div>
    );
};
