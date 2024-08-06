import React, { useState } from 'react';

const WorkingOffice = () => {
  // Initial state with one empty office entry
  const [offices, setOffices] = useState([
    {
      office: '',
      branch: '',
      subBranch: '',
      officePost: '',
    },
  ]);

  // Handle input change
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newOffices = [...offices];
    newOffices[index] = { ...newOffices[index], [name]: value };
    setOffices(newOffices);
  };

  // Add a new office entry
  const addOffice = () => {
    setOffices([
      ...offices,
      {
        office: '',
        branch: '',
        subBranch: '',
        officePost: '',
      },
    ]);
  };

  // Remove an office entry
  const removeOffice = (index) => {
    if (offices.length > 1) {
      setOffices(offices.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold">Working Office</h1>
      </div>
      <div className="p-4">
        <form className="flex flex-col gap-6">
          {offices.map((office, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <label htmlFor={`office-${index}`} className="font-medium">Office</label>
                  <input
                    id={`office-${index}`}
                    name="office"
                    type="text"
                    value={office.office}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter office"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`branch-${index}`} className="font-medium">Branch</label>
                  <input
                    id={`branch-${index}`}
                    name="branch"
                    type="text"
                    value={office.branch}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter branch"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`sub-branch-${index}`} className="font-medium">Sub Branch</label>
                  <input
                    id={`sub-branch-${index}`}
                    name="subBranch"
                    type="text"
                    value={office.subBranch}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter sub branch"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`office-post-${index}`} className="font-medium">Office Post</label>
                  <input
                    id={`office-post-${index}`}
                    name="officePost"
                    type="text"
                    value={office.officePost}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter office post"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                {index === offices.length - 1 && (
                  <button
                    type="button"
                    onClick={addOffice}
                    className="border-solid border-2 border-blue-500 text-blue-500 rounded-lg px-4 py-2 font-medium"
                  >
                    Add New Office
                  </button>
                )}
                {offices.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeOffice(index)}
                    className="border-solid border-2 border-red-500 text-red-500 rounded-lg px-4 py-2 font-medium"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default WorkingOffice;
