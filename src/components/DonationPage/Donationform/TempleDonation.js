import React, { useRef } from 'react'

const TempleDonation = () => {
    
        const temples = [
            { id: 1, name: 'Pashupatinath Temple' },
            { id: 2, name: 'Boudhanath Stupa' },
            { id: 3, name: 'Swayambhunath Stupa' },
            { id: 4, name: 'Manakamana Temple' },
            { id: 5, name: 'Dakshinkali Temple' },
          ];
          const templeRef = useRef('');
          const donationRef = useRef();
          const handelSubmmit =()=>{
              const TempName = templeRef.current.value.trim();
              const donationAmount = donationRef.current.value.trim();
              console.log('temp:',TempName);
              console.log(donationAmount)
          }
          
      return (
        <div className='w-full lg:w-[70%] px-1 lg:px-5 py-7 flex flex-col gap-4 bg-green-500 rounded-xl mt-3 '>
               <div className='flex gap-2'>
                 <label className='w-1/3 font-semibold'>Choose Jatra:</label>
                 <select
                id="temple"
                  ref={templeRef}
                className="block appearance-none w-1/3 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>Select a temple</option>
                {temples.map((temple) => (
                  <option key={temple.id} value={temple.name}>
                    {temple.name}
                  </option>
                ))}
              </select>
               </div>
              <div className='flex gap-2'>
                <label className='w-1/3 font-semibold'>Donation Amount</label>
              <input type='number' ref={donationRef} className='w-2/3 lg:w-1/3 h-10 rounded-md px-3 py-1' min={10}/>
                </div> 
                <div className='w-full flex justify-end px-12'>
                    <button onClick={()=>handelSubmmit()}  className='px-3 py-1 rounded-lg bg-red-600 text-lg text-white font-semibold' >Submit</button>
                </div>
        </div>
  )
}

export default TempleDonation
