import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NoticeForm = () => {
  const titleRef = useRef();
  const textRef = useRef();
  const photoRef = useRef();
  const urgentRef = useRef();
  const popUpRef = useRef();
  const branchRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const title = titleRef.current.value;
    const text = textRef.current.value;
    const image = photoRef.current.files[0];
    const urgent = urgentRef.current.checked;
    const display_popup = popUpRef.current.checked;
    // const branch = branchRef.current.value;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('text', text);
    formData.append('image', image);
    formData.append('urgent', urgent);
    formData.append('display_popup', display_popup);
    // formData.append('branch', branch);

    try {
      const response = await fetch('https://guthi.pythonanywhere.com/api/notices/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle successful response
        toast.success("sucessfully added")
        navigate('/');
      } else {
        // Handle error response
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error);
    }
  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h1>Notice Form</h1>
      <div className='flex lg:w-1/2 w-[90%] flex-col p-4 gap-4 bg-zinc-600'>
        <div className='flex gap-2'>
          <label className='font-semibold text-lg text-white'>Title</label>
          <input ref={titleRef} type='text' className='px-2 py-1 h-10 w-1/2 rounded-md' placeholder='Title' />
        </div>
        <div className='flex gap-2'>
          <label className='font-semibold text-lg text-white'>Text</label>
          <input ref={textRef} type='text' className='px-2 py-1 h-10 w-1/2 rounded-md' placeholder='Text' />
        </div>
        <div className='flex gap-2'>
          <label className='font-semibold text-lg text-white'>Upload photo</label>
          <input ref={photoRef} type='file' className='h-10 px-2 w-[70%]' />
        </div>
        <div className='flex gap-2 items-center'>
          <label className='font-semibold text-lg text-white'>Urgent:</label>
          <input ref={urgentRef} type='checkbox' className='scale-150' />
        </div>
        <div className='flex gap-2 items-center'>
          <label className='font-semibold text-lg text-white'>Pop up:</label>
          <input ref={popUpRef} type='checkbox' className='scale-150' />
        </div>
        {/* <div className='flex gap-2'>
          <label className='font-semibold text-lg text-white'>Branch</label>
          <input ref={branchRef} type='text' className='px-2 py-1 h-10 w-1/2 rounded-md' placeholder='Branch' />
        </div> */}
        <div className='w-full justify-center'>
          <button onClick={handleSubmit} className='px-6 py-1 rounded-md text-white font- bg-red-600 hover:bg-red-800'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeForm;
