import {React,useRef, useState} from 'react'
import { useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faClose } from '@fortawesome/free-solid-svg-icons';
import { showAlert } from '../../../AlertLoader';
import { useSelector } from 'react-redux';
export const AddTempleManagment = ({fetchTemple}) => {

  const [isAddTempleActivate,setIsAddTempleActivate]=useState(false)
  const isMobile = useMediaQuery('(max-width:800px)');
     const [members, setMembers] = useState(['']);

     const handleAddMember = () => {
       setMembers([...members, '']);
     };
   
     const handleMemberChange = (index, event) => {
       const newMembers = members.slice();
       newMembers[index] = event.target.value;
       setMembers(newMembers);
     };
   
     const handleSubmit = (event) => {
       event.preventDefault();
       // Handle form submission logic here
       console.log(event)
       console.log('Guthi Name:', event.target.guthiName.value);
       console.log('Members:', members);
       console.log('Geo Location:', event.target.geoLocation.value);
       console.log('Bank Account:', event.target.bankAccount.value);
       console.log('Land:', event.target.land.value);
       console.log('Ornaments:', event.target.ornaments.value);
       console.log('Cash:', event.target.cash.value);
       console.log('Buildings:', event.target.buildings.value);
     };
    
  return (
    <>
    {!isAddTempleActivate&&<>
    <div 
            onClick={()=>setIsAddTempleActivate(true)}
            className={`${isMobile?'h-[100px] w-[150px]':'h-[150px] w-[200px] '}  hover:scale-105  bg-gray-600 rounded-md border border-white flex flex-col text-white items-center justify-center`} >
            <div>Add </div>
            <FontAwesomeIcon icon={faPlus} size='3x'/>
        </div>
    </>}

    <>
    {isAddTempleActivate&&
    <div className=" p-6  w-full">
    <div className=" lg:w-2/3 mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Add Temple Management</h1>
      <form onSubmit={handleSubmit}>
        {/* Guthi Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guthiName">
            Guthi Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="guthiName"
            name="guthiName"
            type="text"
            placeholder="Enter Guthi Name"
          />
        </div>

        {/* Member List */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Member List
          </label>
          {members.map((member, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={member}
                onChange={(event) => handleMemberChange(index, event)}
                placeholder="Enter Member Name"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddMember}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          >
            Add Member
          </button>
        </div>

        {/* Geo Location */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="geoLocation">
            Geo Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="geoLocation"
            name="geoLocation"
            type="text"
            placeholder="Enter Geo Location"
          />
        </div>

        {/* Bank Account */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankAccount">
            Bank Account
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bankAccount"
            name="bankAccount"
            type="text"
            placeholder="Enter Bank Account Details"
          />
        </div>

        {/* Property Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Property Section</h2>

          {/* Land */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="land">
              Land
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="land"
              name="land"
              type="text"
              placeholder="Enter Land Details"
            />
          </div>

          {/* Ornaments */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ornaments">
              Ornaments
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ornaments"
              name="ornaments"
              type="text"
              placeholder="Enter Ornaments Details"
            />
          </div>

          {/* Cash */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cash">
              Cash
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cash"
              name="cash"
              type="text"
              placeholder="Enter Cash Details"
            />
          </div>

          {/* Buildings */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buildings">
              Buildings
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="buildings"
              name="buildings"
              type="text"
              placeholder="Enter Buildings Details"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  }
    </>
    </>
    

    
  )
}
