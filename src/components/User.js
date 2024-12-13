import React from 'react'
import { useNavigate } from 'react-router-dom'
import './user.css'
export default function User({name,address,phone,_id}) {
  const navigate = useNavigate();
  const openUser = async()=>{
    try{
      let res = await fetch(`/setuser/${_id}`);
      let res2 = await fetch(`/settodaysbill/${_id}`)
      res2 = await res2.json();
      console.log(res2);
      navigate('/customerpage');
    }catch(e){
      console.log(e.message);
    }
  }
  return (
    <div id='usDiv'>
      <h2>Name: {name}</h2>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
      <button onClick={openUser}>Go to Dashboard</button>
    </div>
  )
}
