import React from 'react'

const InputWidget = ({info, type, set}) => {
  return (
    <div className=' w-full border-[2px]  border-[#87CEEB] hover:border-2 m-2 hover:border-[3px] rounded-[7px] flex justify-between items-center'>
    <input type={type} onChange={(e)=> set(e.target.value)} className='p-2 pl-5 border-none rounded-[7px] placeholder-[#666666] hover:bg-white text-[#333333] bg-transparent w-full' placeholder={info}/>
   </div>
  )
}

export default InputWidget
