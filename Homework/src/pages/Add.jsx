
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Add = () => {
    const navigate=useNavigate()
    const [formdata,setFormdata]=useState({person:"",subject:""});
    const handlechange=(e)=>{
        console.log(e.target.value);
        setFormdata({...formdata,[e.target.id]: e.target.value});
        console.log(formdata);

    }
    const handlesubmit=async()=>{
        const result=await fetch("http://localhost:3000/add",{
            method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formdata),
        })
        if(result.ok){
            console.log('posted')
            navigate("/homework")
        }
    }



  return (
    <div className='h-screen w-screen bg-indigo-800 flex flex-col gap-[2rem] items-center justify-center'>
 <section className='w-[100%] flex items-center justify-center capitalize text-white font-mono text-3xl'>Add person with your coppy</section>
       <section className='bg-indigo-300/50 h-[50vh] p-[20px] rounded-2xl w-[50vw] flex items-center justify-start gap-[2rem] flex-col'>

        <section  className=' w-[100%] flex items-center justify-center flex-col'>Subject: <input id='person' onChange={(e)=>handlechange(e)} placeholder='Enter the subject' className='w-[95%] text-center bg-indigo-300/50 placeholder:text-black   rounded-lg border-2 border-black h-[9vh]' type="text" /></section>
        <section  className=' w-[100%] flex items-center justify-center flex-col'>person: <input id='subject' onChange={(e)=>handlechange(e)} placeholder='Enter the person' className='w-[95%] text-center  bg-indigo-300/50 placeholder:text-black rounded-lg  border-2 border-black h-[9vh]' type="text" /></section>
        <button onClick={handlesubmit} className='border-gray-900 border-2 p-2 hover:bg-indigo-600 hover:shadow-xl shadow-none hover:-translate-y-1 shadow-indigo-900 bg-indigo-400 w-[30%] ease-in-out hover:text-gray-50 transition duration-150 rounded-lg mt-[2rem]'>Add person</button>
       </section>

    </div>
  )
}

export default Add