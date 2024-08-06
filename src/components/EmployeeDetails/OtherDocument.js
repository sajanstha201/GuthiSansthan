import React from 'react';

const OtherDocument = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold">Other Document</h1>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="other-document" className="font-medium">Upload Document</label>
            <input
              id="other-document"
              type="file"
              className="border-solid border-2 border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherDocument;
