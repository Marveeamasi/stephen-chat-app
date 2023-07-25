import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const AppBarWidget = ({data}) => {
  
  return (
    <div onClick={()=>signOut(auth)} className='sticky top-[0] bg-white z-[11]  w-full p-2 border-b-2 border-b-[#87CEEB] flex justify-between items-center'>
     <i class='fa fa-arrow-left font-[700] text-[30px] text-[#87CEEB] cursor-pointer'></i>
      <div className='text-[#666666] font-[700]'>{data.user?.displayName}</div>
       <i  class="fa-solid fa-person-through-window text-[#00A7E1] text-[30px] font-[700] cursor-pointer"></i>
    </div>
  )
}

export default AppBarWidget
