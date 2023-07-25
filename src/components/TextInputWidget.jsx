import React, { useContext, useState } from 'react'
import InputWidget from './InputWidget'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import {v4 as uuid} from 'uuid'

const TextInputWidget = () => {
  const [text, setText] = useState('')
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const handleSend = async () => {
     await updateDoc(doc(db,'chats',data.chatId),{
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId:currentUser.uid,
        date: Timestamp.now(),
      })
     });

     await updateDoc(doc(db,'userChats', currentUser.uid),{
      [data.chatId+'.lastMessage']:{
        text
      },
      [data.chatId+'.date']: serverTimestamp(),
     })

     await updateDoc(doc(db,'userChats', data.user.uid),{
      [data.chatId+'.lastMessage']:{
        text
      },
      [data.chatId+'.date']: serverTimestamp(),
     })

     setText('');
  }

  return (
    <div className='fixed bottom-[10px] w-[350px] m-2  border-[2px] z-[11]  border-[#87CEEB] p-2 bg-white rounded-[7px] flex justify-between items-center'>
      <input onChange={(e)=> setText(e.target.value)} value={text} placeholder='Send your message..' className='p-2 w-[200px] hover:border-b-2  hover:border-b-[#87CEEB]'/>
      <div className='text-[#999999]'>|</div>
      <i onClick={handleSend} class='fa-solid fa-paper-plane cursor-pointer text-[#00A7E1] hover:text-[#87CEEB] text-[20px] sm:mr-2 mr-5'></i>
    </div>
  )
}

export default TextInputWidget
