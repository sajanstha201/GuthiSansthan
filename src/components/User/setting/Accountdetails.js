import axios, { Axios } from 'axios';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

export const AccountDetails = () => {
  const firstname =sessionStorage.getItem('firstname')
  const lastname =sessionStorage.getItem('lastname')
  const username =sessionStorage.getItem('username')
  const email =sessionStorage.getItem('email')
  console.log(firstname,lastname,username,email)
  const fRef = useRef(firstname)
  const lRef = useRef(lastname)
  const usernameRef = useRef(username)
  const emailRef = useRef(email)
  const handelSubmit= async()=>{
       const newFirstname = fRef.current.data.trim()
       const newLastname = lRef.current.data.trim()
       const newUsername = usernameRef.current.data.trim()
       const newEmail = emailRef.current.data.trim()
       if(!newEmail ||!newFirstname || !newLastname ||!newUsername){
         alert("can't upload empty data")
         return;
       }
       const formData = new FormData();
        formData.append("first_name",newFirstname)
        formData.append("last_name",newLastname)
        formData.append("username",newUsername)
        formData.append("email",newEmail)
        try{
          const response = await axios.patch("https://ingnepal.org.np/api/login/",{
            body:formData,
          })
          if(!response.ok){
            throw new Error ("something error please try again later !")
          }
        }catch(error){
          toast.error(error);
        }
  }
  
  
  return (
    <>
        <form className="space-y-4">
      <div className='flex flex-wrap justify-between w-full'>
        <div className='w-full lg:w-[40%]'>
            
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          First name
        </label>
        <input
         ref={fRef}
          id="username"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 h-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Username"
        />
        </div>
        <div className='w-full lg:w-[40%]'>
            
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Last name
        </label>
        <input
        ref={lRef}
          id="username"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 h-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Username"
        />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
        ref={usernameRef}
          id="username"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 h-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Username"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
           ref={emailRef}
          id="email"
          type="email"
          className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <button
          onClick={()=>handelSubmit()}
          className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
      </div>
    </form>
    </>

  );
};
