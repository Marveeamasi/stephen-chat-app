import React, { useContext, useEffect, useState } from 'react'
import {AuthContext} from '../context/AuthContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import EachChatListWidget from './EachChatListWidget'
import { ChatContext } from '../context/ChatContext'

const Chats = () => {
    const [chats, setChats] = useState([])
    const {currentUser} = useContext(AuthContext)
    const {dispatch} = useContext(ChatContext)

useEffect(()=>{
   const getChats = () => {
    const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) =>{
      setChats(doc.data());
    });
    return () => {
      unsub()
    };
   };
   currentUser.uid && getChats()
},[currentUser.uid]);

const handleSelect = (u) => {
  dispatch({type: 'CHANGE_USER', payload: u})
}

  return (
    <div>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>(
        <EachChatListWidget click={handleSelect} chat={chat} key={chat[0]}/>
      ))}
    </div>
  )
}

export default Chats
