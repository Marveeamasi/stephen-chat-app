import React, { useEffect, useRef } from 'react'

const Message = ({message, c}) => {
  const ref = useRef()

useEffect(()=>{
  ref.current?.scrollIntoView({behavior:'smooth'})
},[message])

  return (
    <div ref={ref} className='w-full w-[60%] my-1 p-2 self-start backdrop-blur-[3px] rounded-[7px] bg-[rgba(0,0,255,.1)]  border-[#00A7E1]] flex flex-col justify-center items-center'>
    <div className='flex self-start text-[#666666]'>{message.text}</div>
    <div className='flex self-end text-[#999999] text-[10px] roboto font-[700]'>{message.date}</div>
 </div>
  )
}

export default Message
