import React, { useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

export const ProfileUpdateSection = () => {
  const firstnameRef = useRef('');
  const lastnameRef = useRef('');
  const usernameRef = useRef('');
  const emailRef = useRef('');
  const locationRef = useRef('');
  const contactRef = useRef('');
  const [profile, setProfile] = useState('');
  const [file, setFile] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile(e.target.result);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFirstname = firstnameRef.current.value.trim();
    const newLastname = lastnameRef.current.value.trim();
    const newUsername = usernameRef.current.value.trim();
    const newEmail = emailRef.current.value.trim();
    const newLocation = locationRef.current.value.trim();
    const newContact = contactRef.current.value.trim();

    if (!newEmail || !newFirstname || !newLastname || !newUsername || !newLocation || !newContact) {
      toast.error("All fields are required.");
      return;
    }

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append('first_name', newFirstname);
      formData.append('last_name', newLastname);
      formData.append('username', newUsername);
      formData.append('email', newEmail);
      formData.append('location', newLocation);
      formData.append('contact_number', newContact);
      if (file) formData.append('profile_picture', file);

      const response = await axios.patch('https://ingnepal.org.np/api/update-profile/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        toast.success("Profile updated successfully.");
        // Clear form
        firstnameRef.current.value = '';
        lastnameRef.current.value = '';
        usernameRef.current.value = '';
        emailRef.current.value = '';
        locationRef.current.value = '';
        contactRef.current.value = '';
        setProfile('');
        setFile(null);
      } else {
        throw new Error("Failed to update profile.");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong, please try again later.");
    }
  };

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-2 my-2 p-6 relative bg-white rounded-lg shadow-lg">
        <label
          htmlFor='profile-picture'
          className='border-b bg-gray-500 border-black rounded-full h-20 w-20 lg:h-44 lg:w-44 flex justify-center items-center cursor-pointer'
          style={{ backgroundImage: `url(${profile})`, backgroundSize: 'cover' }}
        >
          {!profile ? (
            <FontAwesomeIcon icon={faAdd} className='text-white text-2xl' />
          ) : (
            <img src={profile} className='w-full h-full rounded-full' alt="Profile" />
          )}
        </label>
        <input
          type='file'
          id='profile-picture'
          className='hidden'
          onChange={handleImage}
        />
        <h3 className="text-lg font-semibold mt-2">Update your profile picture</h3>
        <button className='bg-blue-700 text-white font-semibold absolute top-2 right-2 px-4 py-2 rounded-md'>Update</button>
      </div>

      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Account Update</h2>
        <form onSubmit={handleSubmit} className="space-y-6 lg:px-36">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="firstname">
              First Name
            </label>
            <input
              ref={firstnameRef}
              id="firstname"
              type="text"
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="lastname">
              Last Name
            </label>
            <input
              ref={lastnameRef}
              id="lastname"
              type="text"
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="username">
              Username
            </label>
            <input
              ref={usernameRef}
              id="username"
              type="text"
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
              id="email"
              type="email"
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="location">
              Location
            </label>
            <input
              ref={locationRef}
              id="location"
              type="text"
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your location"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="contact">
              Contact Number
            </label>
            <input
              ref={contactRef}
              id="contact"
              type="tel"
              className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
