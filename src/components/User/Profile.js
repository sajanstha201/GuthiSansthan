import React, { useState } from 'react';
import { AccountDetails } from './setting/Accountdetails';
import PasswordSecurity from './setting/PasswordSecurity'
const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('account');

  const renderContent = () => {
    switch (selectedTab) {
      case 'account':
        return <AccountDetails />;
      case 'password':
        return <PasswordSecurity />;
      default:
        return <AccountDetails />;
    }
  };
  return (
    <div className="min-h-screen bg-ancient-paper bg-cover flex justify-center items-start py-10 bg-gradient-to-r from-orange-400 to-yellow-600">
    <div className="w-full max-w-4xl p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <button
          className={`py-2 px-4 mx-2 font-semibold text-lg ${selectedTab === 'account' ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-700'} rounded-lg`}
          onClick={() => setSelectedTab('account')}
        >
          Account Details
        </button>
        <button
          className={`py-2 px-4 mx-2 font-semibold text-lg ${selectedTab === 'password' ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-700'} rounded-lg`}
          onClick={() => setSelectedTab('password')}
        >
          Password & Security
        </button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  </div>
  )
}

export default Profile

