import React from 'react'
import User from '../components/User';
import { useState } from 'react';
import { useEffect } from 'react';
import './alluser.css'
export default function AllCustomer() {
  const [find,setFind] = useState("all");
  const [hold,setHold] = useState(true);
  const [customer,setCustomer] = useState([]);
  useEffect(()=>{
    getCustomer(find);
  },[find])
  const inputHandler = (e)=>{
    setFind(e.target.value);
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    getCustomer(find);
  }
  const getCustomer = async(finder)=>{
    try{
      let res = await fetch(`/getcustomer/${finder}`);
      res = await res.json();
      setHold(false);
      setCustomer(res.response);
    }catch(e){
      
    }
  }
  return (
    <>
    <button className='allBtn1' onClick={()=>{
      setFind("");
      getCustomer('all');
    }}>Get All User</button><br/>
    <input value={find} onChange={inputHandler} id='srin1' name='find'/><br/>
    <button id='srbtn1' onClick={submitHandler}>Search</button>
    <div id='mainUs'>
      {
        hold?<marquee>Please Wait</marquee>:<>
        {
        customer.map((item)=>{
          return <User {...item}/>
        })
        }
        </>
      }
    </div>
    </>
  )
}
