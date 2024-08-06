import React, { useState } from 'react';

const TransferWorkDetials = () => {
  const [details, setDetails] = useState([
    {
      establishment: '',
      form: '',
      until: '',
      transferWork: '',
      remarks: '',
    },
  ]);

  // Handle input change
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newDetails = [...details];
    newDetails[index] = { ...newDetails[index], [name]: value };
    setDetails(newDetails);
  };

  // Add a new detail
  const addDetail = () => {
    setDetails([
      ...details,
      {
        establishment: '',
        form: '',
        until: '',
        transferWork: '',
        remarks: '',
      },
    ]);
  };

  // Remove a detail
  const removeDetail = (index) => {
    if (details.length > 1) {
      const newDetails = details.filter((_, i) => i !== index);
      setDetails(newDetails);
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold">Transfer and Work Details</h1>
      </div>
      <div className="p-4">
        <form className="flex flex-col gap-6">
          {details.map((detail, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="flex flex-col">
                  <label htmlFor={`establishment-${index}`} className="font-medium">Establishment</label>
                  <input
                    id={`establishment-${index}`}
                    name="establishment"
                    type="text"
                    value={detail.establishment}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter establishment"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor={`form-${index}`} className="font-medium">Form</label>
                  <input
                    id={`form-${index}`}
                    name="form"
                    type="text"
                    value={detail.form}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter form"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor={`until-${index}`} className="font-medium">Until</label>
                  <input
                    id={`until-${index}`}
                    name="until"
                    type="text"
                    value={detail.until}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter until"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor={`transfer-work-${index}`} className="font-medium">Transfer/Work</label>
                  <input
                    id={`transfer-work-${index}`}
                    name="transferWork"
                    type="text"
                    value={detail.transferWork}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter transfer/work"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor={`remarks-${index}`} className="font-medium">Remarks</label>
                  <input
                    id={`remarks-${index}`}
                    name="remarks"
                    type="text"
                    value={detail.remarks}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter remarks"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                {details.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDetail(index)}
                    className="border-solid border-2 border-red-500 text-red-500 rounded-lg px-4 py-2 font-medium"
                  >
                    Remove
                  </button>
                )}
                {index === details.length - 1 && (
                  <button
                    type="button"
                    onClick={addDetail}
                    className="border-solid border-2 border-blue-500 text-blue-500 rounded-lg px-4 py-2 font-medium"
                  >
                    Add New Detail
                  </button>
                )}
              </div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
}

export default TransferWorkDetials;
