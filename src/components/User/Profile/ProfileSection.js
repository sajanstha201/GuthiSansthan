import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProfileSection = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://ingnepal.org.np/api/login/');
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <img
            src={profileData.profile_picture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 lg:w-44 lg:h-44 rounded-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">{profileData.first_name} {profileData.last_name}</h3>
            <p className="text-gray-600">@{profileData.username}</p>
          </div>
          <div>
            <p className="text-gray-700"><strong>Email:</strong> {profileData.email}</p>
            <p className="text-gray-700"><strong>Location:</strong> {profileData.location}</p>
            <p className="text-gray-700"><strong>Contact Number:</strong> {profileData.contact_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
