import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSignIn = async() => {
    try{
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/chatadmin')
    }catch(err){
    setErr(true)
    }
      
    }

  return (
    <div className='w-full flex flex-col justify-center items-center h-[100vh] bg-no-repeat bg-[rgba(255,255,255,.8)] bg-blend-lighten bg-center bg-cover bg-[url("https://media.istockphoto.com/id/1467813336/vector/smartphone-with-speech-bubble-icon-on-blue-background-flat-design-with-long-shadow.jpg?s=612x612&w=0&k=20&c=fgSCgIVHkLQ7TT2DVwG3myBeUnD-BssHP8P8LRsQYcs=")]'>
    <div className='roboto font-[700] flex  text-center text-[#00A7E1] text-[30px] m-2'>Login To Continue Chat</div>
     <div className='w-[500px] sm:w-[300px] p-5  flex flex-col  justify-center items-center backdrop-blur-[3px] bg-[rgba(255,255,255,.5)] rounded-[7px]'>
     
     <div className=' w-full border-[2px]  border-[#87CEEB] hover:border-2 m-2 hover:border-[3px] rounded-[7px] flex justify-between items-center'>
    <input type={`email`} onChange={(e)=> setEmail(e.target.value)} className='p-2 pl-5 border-none rounded-[7px] placeholder-[#666666] hover:bg-white text-[#333333] bg-transparent w-full' placeholder={`Enter email..`}/>
   </div>
   <div className=' w-full border-[2px]  border-[#87CEEB] hover:border-2 m-2 hover:border-[3px] rounded-[7px] flex justify-between items-center'>
    <input type={`password`} onChange={(e)=> setPassword(e.target.value)} className='p-2 pl-5 border-none rounded-[7px] placeholder-[#666666] hover:bg-white text-[#333333] bg-transparent w-full' placeholder={`Enter password..`}/>
   </div>
     <button onClick={handleSignIn} className='bg-transparent md:hover:bg-transparent md:bg-[#00A7E1] md:hover:text-[#00A7E1] hover:text-white md:text-white font-[700] text-[#00A7E1] w-full border-2 w-full m-2 border-[#00A7E1] rounded-[7px] rounded-[7px] h-[50px] flex justify-center items-center hover:bg-[#00A7E1]'>Continue</button>
     {err && <div className=' font-[700] text-[tomato] w-full  w-full m-2  h-[50px] flex justify-center items-center'></div>}
     </div>
   </div>
  )
}

export default Login
