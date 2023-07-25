import React from 'react'
import ChatRoomWidget from '../components/ChatRoomWidget'
import UserChatCoverWidget from '../components/UserChatCoverWidget'

const UserChat = () => {
  return (
    <div className='flex justify-center items-center'>
      <UserChatCoverWidget/> 
      <ChatRoomWidget/>
    </div>
  )
}

export default UserChat
