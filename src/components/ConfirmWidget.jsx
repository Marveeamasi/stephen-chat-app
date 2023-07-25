import React from 'react'

const ConfirmWidget = () => {
  return (
    <div className='w-[200px] fixed h-[200px] top-[50%] z-[80] left-[50%] mt-[-100px] ml-[-100px] glass bg-[#ffffffe6] shadow-md rounded-md flex flex-col justify-center items-center text-center'>
      <div className='text-center robot text-lg text-[#87CEEB] font-bold m-2'>Are you sure to logout ?</div>
      <div className='flex w-[100%] justify-around items-center'>
        <button className='border-2 w-[80px] m-2 border-[#87CEEB] text-center hover-opacity-[.7] text-[#87CEEB] rounded-md p-2' >Cancel</button>
        <button className='bg-[#87CEEB] m-2 hover:opacity-[.7] rounded-md text-center w-[80px] p-2 text-white' >Yes</button>
      </div>
    </div>
  )
}

export default ConfirmWidget
