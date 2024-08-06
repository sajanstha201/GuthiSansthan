import React, { useState } from 'react';

const Award = () => {
  const [awards, setAwards] = useState([
    {
      explanation: '',
      establishment: '',
      date: '',
      awardPunishment: '',
    },
  ]);

  // Handle input change
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newAwards = [...awards];
    newAwards[index] = { ...newAwards[index], [name]: value };
    setAwards(newAwards);
  };

  // Add a new award
  const addAward = () => {
    setAwards([
      ...awards,
      {
        explanation: '',
        establishment: '',
        date: '',
        awardPunishment: '',
      },
    ]);
  };

  // Remove an award
  const removeAward = (index) => {
    if (awards.length > 1) {
      const newAwards = awards.filter((_, i) => i !== index);
      setAwards(newAwards);
    }
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold">Awards/Punishment</h1>
      </div>
      <div className="p-4">
        <form className="flex flex-col gap-6">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <label htmlFor={`explanation-${index}`} className="font-medium">Explanation</label>
                  <input
                    id={`explanation-${index}`}
                    name="explanation"
                    type="text"
                    value={award.explanation}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter explanation"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor={`establishment-${index}`} className="font-medium">Establishment</label>
                  <input
                    id={`establishment-${index}`}
                    name="establishment"
                    type="text"
                    value={award.establishment}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter establishment"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor={`date-${index}`} className="font-medium">Date</label>
                  <input
                    id={`date-${index}`}
                    name="date"
                    type="text"
                    value={award.date}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter date"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor={`award-punishment-${index}`} className="font-medium">Award/Punishment</label>
                  <input
                    id={`award-punishment-${index}`}
                    name="awardPunishment"
                    type="text"
                    value={award.awardPunishment}
                    onChange={(e) => handleInputChange(index, e)}
                    className="border-solid border-2 border-gray-300 rounded-lg p-2"
                    placeholder="Enter award or punishment"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                {awards.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAward(index)}
                    className="border-solid border-2 border-red-500 text-red-500 rounded-lg px-4 py-2 font-medium"
                  >
                    Remove
                  </button>
                )}
                {index === awards.length - 1 && (
                  <button
                    type="button"
                    onClick={addAward}
                    className="border-solid border-2 border-blue-500 text-blue-500 rounded-lg px-4 py-2 font-medium"
                  >
                    Add New Award
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

export default Award;
