import { PasswordSecuritySection } from "./PasswordSecuritySection";
import { ProfileUpdateSection } from "./ProfileUpdateSection";
import { useState } from 'react';

export const SettingMainPage = () => {
  const [section, setSection] = useState('profile-update-section');

  return (
    <>
      <div className="w-full bg-gray-100 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-center">
          <nav className="flex space-x-8 bg-white p-4 rounded-lg shadow-lg">
            <button
              className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-300 ${section === 'profile-update-section' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}
              onClick={() => setSection('profile-update-section')}
            >
              Profile Update
            </button>
            <button
              className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-300 ${section === 'password-security-section' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}
              onClick={() => setSection('password-security-section')}
            >
              Password Security
            </button>
          </nav>
        </div>
      </div>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
        {section === 'profile-update-section' && <ProfileUpdateSection />}
        {section === 'password-security-section' && <PasswordSecuritySection />}
      </div>
    </>
  );
};
