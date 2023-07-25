import React from 'react'

const EachChatListWidget = ({chat, click}) => {
  return (
    <div onClick={() => click(chat[1].userInfo)} className='w-full cursor-pointer hover:bg-transparent my-1 p-2 backdrop-blur-[3px] rounded-[7px] bg-[rgba(0,0,255,.1)] border-2 border-[#00A7E1] flex flex-col justify-center items-center'>
       <div className='flex self-start roboto text-[#999999]'>{chat[1].userInfo.displayName}</div>
       <div className='flex self-start text-[#666666]'>{chat[1].lastMessage?.text}</div>
    </div>
  )
}

export default EachChatListWidget
