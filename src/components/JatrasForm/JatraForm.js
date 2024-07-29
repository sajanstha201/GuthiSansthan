import React, { useRef, useState } from 'react';

import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/index.css"

const JatraForm = () => {
  const nameRef = useRef();
  const photoRef = useRef();
  const desRef = useRef();
  const [startDate, setstartDate] = useState("")
  const [endDate, setendDate] = useState("")

  const handleSubmit = async () => {
    const name = nameRef.current.value.trim();
    const image = photoRef.current.files[0]; // get the file object
    const description = desRef.current.value.trim();

    if (!name ||!startDate || !endDate ||!image || !description) {
      alert("Please fill out all fields.");
      return;
    }
 



    const formData = new FormData();
    formData.append('name', name);
    formData.append("start_date",startDate)
    formData.append("end_date",endDate)
    formData.append('image', image);
    formData.append('description', description);

    try {
      const response = await fetch('http://guthi.pythonanywhere.com/api/festivals/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      alert("Festival added successfully!");
    } catch (error) {
      console.error('Error:', error);
      alert("Failed to add festival.");
    }
  };

  return (
    <div className='flex flex-col w-[90%] bg-white/50 backdrop-blur-sm rounded-lg lg:w-[50%] p-3 gap-2 mb-12'>
      <h1 className='font-semibold tracking-wider my-2'>Jatra Form</h1>
      <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
        <label className='font-semibold text-lg'>Festival Name:</label>
        <input type='text' ref={nameRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900' />
      </div>
      <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
        <label className='font-semibold text-lg'>starting date (BS):</label>
        <NepaliDatePicker inputClassName="form-control"
                              className=""
                              value={startDate}
                              onChange={(value) => setstartDate(value)}
                              options={{ calenderLocale: "ne", valueLocale: "en" }} />
      </div>
      <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
        <label className='font-semibold text-lg'>Ending date (BS):</label>
        <NepaliDatePicker inputClassName="form-control"
                              className=""
                              value={endDate}
                              onChange={(value) => setendDate(value)}
                              options={{ calenderLocale: "ne", valueLocale: "en" }} />
      </div>
      <div className='flex flex-col flex-wrap py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
        <label className='font-semibold text-lg'>Upload Image:</label>
        <input type='file' ref={photoRef} className='w-full lg:w-2/3 h-12 rounded-md px-3 py-2 border border-zinc-900' />
      </div>
      <div className='flex flex-wrap flex-col py-1 border-y-2 border-b-zinc-700/5 lg:flex-row gap-2 items-center'>
        <label className='font-semibold text-lg'>Description:</label>
        <textarea ref={desRef} className='w-full lg:w-2/3 rounded-md h-44 px-2 py-3 border border-cyan-400' />
      </div>
      <div className='w-full flex justify-end px-5'>
        <button className='bg-red-600 px-4 py-1 rounded-md text-white font-semibold text-lg' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default JatraForm;
