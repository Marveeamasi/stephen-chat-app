import React from 'react'

const EachChatWidget = ({u, hk}) => {
  return (
    <div onClick={hk} className='w-full cursor-pointer hover:bg-transparent my-1 p-2 backdrop-blur-[3px] rounded-[7px] bg-[rgba(0,0,255,.1)] border-2 border-[#00A7E1] flex flex-col justify-center items-center'>
       <div className='flex self-start roboto text-[#999999]'>{u.displayName}</div>
    </div>
  )
}

export default EachChatWidget
