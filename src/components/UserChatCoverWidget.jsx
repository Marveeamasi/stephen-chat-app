import React from 'react'

const UserChatCoverWidget = () => {
  return (
    <div className='md:hidden w-full h-[100vh] flex justify-center items-center bg-no-repeat bg-[rgba(255,255,255,.8)] bg-blend-lighten bg-center bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/008/079/021/original/blue-chat-app-icon-on-blue-background-3d-illustration-vector.jpg")]'>
      <div className='sticky top-[0] z-[11] roboto font-[700] flex  text-center text-[#00A7E1] text-[30px] m-2'>Chat With Stephen</div>
    </div>
  )
}

export default UserChatCoverWidget
