import React, { useContext, useEffect, useState } from 'react'
import AppBarWidget from './AppBarWidget'
import Message from './Message'
import TextInputWidget from './TextInputWidget'
import { ChatContext } from '../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const ChatRoomWidget = () => {
  const {data} = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const {currentUser} = useContext(AuthContext) 

  useEffect(()=>{
    const unSub = onSnapshot(doc(db,'chats', data.chatId), (doc)=>{
      doc.exists() && setMessages(doc.data().messages);
    })

    return () => {
      unSub()
    }
  },[data.chatId])

  return (
    <div className='w-full h-[100vh] overflow-y-scroll'>
      <AppBarWidget data={data}/>
      <div className='flex flex-col justify-center p-4 items-center'>
      {messages.map(m=>  <Message message={m} key={m.id} c={currentUser}/>
        )}
      </div>
      <TextInputWidget/>
    </div>
  )
}

export default ChatRoomWidget
