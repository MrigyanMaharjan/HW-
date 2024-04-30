import React, { useState } from "react";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import {useNavigate} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homeworks = () => {
  const [data, setData] = useState([]);
  const [form,setForm]=useState({form:""})
  const navigate=useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/add", {
          method: "GET",
        });
        const fetchedData = await response.json();
        if (response.ok) {
          console.log(fetchedData);
          setData(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const notify=()=>{
    toast('Changed', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
  }
  const notifydelete=()=>{
    toast('Deleted', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
  }

  const handlereturn=async(e)=>{
    const res=await fetch("http://localhost:3000/return",{
     method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({"_id":e.target.id})});

    if(res.ok){
      console.log("returned");
      notify()
    }
  }

  const handledelete = async (e) => {
    const res = await fetch("http://localhost:3000/delete", {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "_id": e.target.id })
    });

    if (res.ok) {
        console.log("Document deleted successfully");
        notifydelete();
    } else if (res.status === 404) {
        console.log("Homework not found");
       
    } else {
        console.log('Failed');
        
    }
};


  return (
    <div className=" w-screen bg-indigo-900">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <section className="w-screen min-h-screen flex flex-col gap-[3rem] text-gray-50">
        <section className="w-screen flex items-center justify-center fixed h-[10vh] bg-indigo-600 text-xl capitalize ">
          <span onClick={()=>navigate('/home')} className=" absolute left-5 top-5 rounded-lg hover:cursor-pointer hover:bg-indigo-800 transition ease-in-out  bg-indigo-900 w-[4rem] h-10 flex items-center justify-center">
            <IoArrowBack />
          </span>
          <span> These are all your homeworks</span>
        </section>
        <section className="h-full mt-[6rem] w-screen flex items-center justify-center flex-col-reverse gap-4">
          {data
            ? data.map((item, index) => (
  
                <article
                  key={index}
                  className="min-h-[25vw] sm:w-[90vw] md:w-[80vw] max-sm:w-[90vw] bg-indigo-600/50 px-5 p-2 flex items-start justify-center gap-2 flex-col rounded-md lg:w-[45vw]"
                >
                  <section className="w-[100%]  overflow-hidden pt-3">
                    Name:
                    <section className="bg-indigo-600 pl-4 flex items-center  justify-start h-[60px] rounded-xl w-full ">
                      
                      {item.subject}
                    </section>
                  </section>
                  <section className=" w-[100%] overflow-hidden pt-3">
                    Subject:
                    <section className="bg-indigo-600 pl-4 flex items-center  justify-start h-[60px] rounded-xl w-full ">
                      
                      {item.person}
                    </section>
                  </section>
                  <section className="w-[100%]  overflow-hidden pt-3">
                    Reutrned:
                    <section className="bg-indigo-600 px-4 flex items-center  justify-between h-[60px] rounded-xl w-full ">
                      {item.returned === false ? "not returned" : "returned"}
                      <section onClick={(e)=>handlereturn(e)} id={item._id} className="bg-indigo-800 h-[3rem] lg:w-[10vw] flex items-center hover:cursor-pointer rounded-2xl sm:w-[5rem] max-sm:w-[5rem] justify-center">
                        Returned?
                      </section>
                    </section>
                  </section>
                  <section className="w-[100%] mt-2 h-[5vh] flex items-center justify-center overflow-hidden">
                    
                    <section id={item._id} onClick={(e)=>handledelete(e)} className="bg-red-500 hover:cursor-pointer p-2 w-[40%] text-center  rounded-lg">
                      Delete
                    </section>
                  </section>
                </article>
              ))
            : " fetching"}
        </section>
      </section>
    </div>
  );
};

export default Homeworks;
