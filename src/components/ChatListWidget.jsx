import React, { useContext, useState } from 'react'
import EachChatWidget from './EachChatWidget'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase';
import {AuthContext} from '../context/AuthContext'
import Chats from './Chats';

const ChatListWidget = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  const {currentUser} = useContext(AuthContext)

const handleSearch = async ()=> {
  const q = query(collection(db, 'users'),
   where("displayName", "==", username));
try{ 
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    setUser(doc.data())
  });
  }catch(err){
    setErr(true);
  }
};

  const handleKey = e =>{
    e.code === 'Enter' && handleSearch();
  }

const handleSelect = async () => {
//check if the group(chas in firestore) exists, if not create
const combinedId = currentUser.uid > user.uid ?
 currentUser.uid + user.uid : user.uid + currentUser.uid;
try{
  const res = await getDoc(doc(db, 'chats', combinedId));
  if (!res.exists()) {
    //create chat in chat collection
    await setDoc(doc(db, 'chats', combinedId), {messages: [] });

    //create user chats
    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [combinedId+'.userInfo']: {
         uid: user.uid,
         displayName: user.displayName,
         photoURL: user.photoURL
      },
      [combinedId+'.date']: serverTimestamp()
    });

    await updateDoc(doc(db, 'userChats', user.uid), {
      [combinedId+'.userInfo']: {
         uid: currentUser.uid,
         displayName: currentUser.displayName,
         photoURL: currentUser.photoURL
      },
      [combinedId+'.date']: serverTimestamp()
    });
  }
}catch(err){

}

setUser(null);
setUsername('');
}

  return (
    <div className='md:hidden border-r-2  h-[100vh] overflow-y-scroll w-full flex flex-col justify-center items-center p-2 bg-no-repeat bg-[rgba(255,255,255,.8)] bg-blend-lighten bg-center bg-cover bg-[url("https://images.ctfassets.net/3prze68gbwl1/6d6UmCwyE1tzRxwnMeimQs/b28a9164f89265e595de2c6c4cf58a1c/222.jpg")]'>
     <div className='sticky top-[0] z-[11] roboto font-[700] flex  text-center text-[#00A7E1] text-[30px] m-2'>{currentUser.displayName+"'s chat list"}</div>
      <div className='w-full sticky top-[40px] z-[11]'>
      <div className=' w-full border-[2px]  border-[#87CEEB] hover:border-2 m-2 hover:border-[3px] rounded-[7px] flex justify-between items-center'>
    <input onKeyDown={handleKey} type={`text`} value={username} onChange={(e)=> setUsername(e.target.value)} className='p-2 pl-5 border-none rounded-[7px] placeholder-[#666666] hover:bg-white text-[#333333] bg-transparent w-full' placeholder={`Search user`}/>
   </div>
      </div>
      <div className='w-[80%] flex flex-col self-start mt-[120px] pl-[0]'>
      {err && <div className='w-full my-1 p-2 backdrop-blur-[3px] rounded-[7px] bg-[rgba(255,0,0,.1)] border-2 border-[#00A7E1] flex flex-col justify-center items-center'>User not found</div>}
     {user && <EachChatWidget u={user} hk={handleSelect}/>}
      </div>
      <Chats/>
    </div>
  )
}

export default ChatListWidget
