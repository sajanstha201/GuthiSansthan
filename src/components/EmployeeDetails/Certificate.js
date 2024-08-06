import React, { useState } from 'react';

const Certificate = () => {
  // Initial state with one empty certificate
  const [certificates, setCertificates] = useState([
    {
      educationalEstablishment: '',
      layer: '',
      category: '',
      percentage: '',
      passingDate: '',
      studyDuration: '',
      remarks: '',
    },
  ]);

  // Handle input change
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newCertificates = [...certificates];
    newCertificates[index] = { ...newCertificates[index], [name]: value };
    setCertificates(newCertificates);
  };

  // Add a new certificate
  const addCertificate = () => {
    setCertificates([
      ...certificates,
      {
        educationalEstablishment: '',
        layer: '',
        category: '',
        percentage: '',
        passingDate: '',
        studyDuration: '',
        remarks: '',
      },
    ]);
  };

  // Remove a certificate
  const removeCertificate = (index) => {
    if (certificates.length > 1) {
      setCertificates(certificates.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold">Certificates</h1>
      </div>
      <div className="p-4">
        <form className="flex flex-col gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <label htmlFor={`educationalEstablishment-${index}`} className="font-medium">Educational Establishment</label>
                  <input
                    id={`educationalEstablishment-${index}`}
                    name="educationalEstablishment"
                    type="text"
                    value={cert.educationalEstablishment}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter educational establishment"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`layer-${index}`} className="font-medium">Layer</label>
                  <input
                    id={`layer-${index}`}
                    name="layer"
                    type="text"
                    value={cert.layer}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter layer"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`category-${index}`} className="font-medium">Category</label>
                  <input
                    id={`category-${index}`}
                    name="category"
                    type="text"
                    value={cert.category}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter category"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`percentage-${index}`} className="font-medium">Percentage</label>
                  <input
                    id={`percentage-${index}`}
                    name="percentage"
                    type="number"
                    min="0"
                    max="100"
                    value={cert.percentage}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter percentage"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`passingDate-${index}`} className="font-medium">Passing Date</label>
                  <input
                    id={`passingDate-${index}`}
                    name="passingDate"
                    type="date"
                    value={cert.passingDate}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`studyDuration-${index}`} className="font-medium">Study Duration</label>
                  <input
                    id={`studyDuration-${index}`}
                    name="studyDuration"
                    type="text"
                    value={cert.studyDuration}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter study duration"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor={`remarks-${index}`} className="font-medium">Remarks</label>
                  <input
                    id={`remarks-${index}`}
                    name="remarks"
                    type="text"
                    value={cert.remarks}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter remarks"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                {index === certificates.length - 1 && (
                  <button
                    type="button"
                    onClick={addCertificate}
                    className="border-solid border-2 border-blue-500 text-blue-500 rounded-lg px-4 py-2 font-medium"
                  >
                    Add New Certificate
                  </button>
                )}
                {certificates.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCertificate(index)}
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

export default Certificate;
