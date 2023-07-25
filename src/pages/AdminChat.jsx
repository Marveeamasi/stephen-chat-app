import React from 'react'
import ChatRoomWidget from '../components/ChatRoomWidget'
import ChatListWidget from '../components/ChatListWidget'

const AdminChat = () => {
  return (
    <div className='flex justify-between items-center '>
      <ChatListWidget/>
      <ChatRoomWidget/>
    </div>
  )
}

export default AdminChat
