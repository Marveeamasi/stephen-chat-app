import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
const[displayName, setDisplayName] = useState('')
const[email, setEmail] = useState('')
const[location, setLocation] = useState('')
const[password, setPassword] = useState('')
const[confirmedPass, setConfirmedPass] = useState('')
const[isAdmin, setIsAdmin] = useState(false)
const[err, setErr] = useState(false)
const navigate = useNavigate()
 
const handleSignUp = async () => {

try{

  const res = await createUserWithEmailAndPassword(auth, email, password);
  
        await updateProfile(res.user, {
           displayName,
           location,
           isAdmin
        });
        await setDoc(doc(db, 'users', res.user.uid),{
          uid:res.user.uid,
          displayName,
          email,
          location,
          isAdmin
       });
       
        await setDoc(doc(db, 'userChats', res.user.uid), {});
        navigate('/chatadmin')

}catch(err){
setErr(true)
}
  
}

  return (
    <div className='w-full flex flex-col justify-center items-center h-[100vh] bg-no-repeat bg-[rgba(255,255,255,.8)] bg-blend-lighten bg-center bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/008/079/021/original/blue-chat-app-icon-on-blue-background-3d-illustration-vector.jpg")]'>
     <div className='roboto font-[700] flex  text-center text-[#00A7E1] text-[30px] m-2'>STEPHEN HIMSELF</div>
      <div className='w-[500px] sm:w-[300px] p-5  flex flex-col  justify-center items-center backdrop-blur-[3px] bg-[rgba(255,255,255,.5)] rounded-[7px]'>
      <div className=' w-full border-[2px]  border-[#87CEEB] hover:border-2 m-2 hover:border-[3px] rounded-[7px] flex justify-between items-center'>
    <input type={`text`} onChange={(e)=> setDisplayName(e.target.value)} className='p-2 pl-5 border-none rounded-[7px] placeholder-[#666666] hover:bg-white text-[#333333] bg-transparent w-full' placeholder={`Enter your full name..`}/>
   </div>
   <div className=' w-full border-[2px]  border-[#87CEEB] hover:border-2 m-2 hover:border-[3px] rounded-[7px] flex justify-between items-center'>
    <input type={`email`} onChange={(e)=> setEmail(e.target.value)} className='p-2 pl-5 border-none rounded-[7px] placeholder-[#666666] hover:bg-white text-[#333333] bg-transparent w-full' placeholder={`Enter your email..`}/>
   </div>
   <div className=' w-full border-[2px]  border-[#87CEEB] hover:border-2 m-2 hover:border-[3px] rounded-[7px] flex justify-between items-center'>
    <input type={`location`} onChange={(e)=> setLocation(e.target.value)} className='p-2 pl-5 border-none rounded-[7px] placeholder-[#666666] hover:bg-white text-[#333333] bg-transparent w-full' placeholder={`Enter your location..`}/>
   </div>
   <div className=' w-full border-[2px]  border-[#87CEEB] hover:border-2 m-2 hover:border-[3px] rounded-[7px] flex justify-between items-center'>
    <input type={`password`} onChange={(e)=> setPassword(e.target.value)} className='p-2 pl-5 border-none rounded-[7px] placeholder-[#666666] hover:bg-white text-[#333333] bg-transparent w-full' placeholder={`Enter a chat code..`}/>
   </div>
   <div className=' w-full border-[2px]  border-[#87CEEB] hover:border-2 m-2 hover:border-[3px] rounded-[7px] flex justify-between items-center'>
    <input type={`password`} onChange={(e)=> setConfirmedPass(e.target.value)} className='p-2 pl-5 border-none rounded-[7px] placeholder-[#666666] hover:bg-white text-[#333333] bg-transparent w-full' placeholder={`Re-enter code..`}/>
   </div>
      <button onClick={handleSignUp} className='bg-transparent md:hover:bg-transparent md:bg-[#00A7E1] md:hover:text-[#00A7E1] hover:text-white md:text-white font-[700] text-[#00A7E1] w-full border-2 w-full m-2 border-[#00A7E1] rounded-[7px] rounded-[7px] h-[50px] flex justify-center items-center hover:bg-[#00A7E1]'>Register</button>
      {err && <div className=' font-[700] text-[tomato] w-full  w-full m-2  h-[50px] flex justify-center items-center'></div>}
      </div>
    </div>
  )
}

export default RegisterUser
