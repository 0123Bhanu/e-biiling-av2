import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Bills from './Bills';
import './cp.css'
export default function CustomerPage({currentUser}) {
  const [hold,setHold] = useState(true);
  const [user,setUser] = useState({});
  const [bill,setBill] = useState([]);
  const [stay,setStay] = useState(true);
  const [due,setDue] = useState(0);
  useEffect(()=>{
    getUser();
  },[])
  const send = async()=>{
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:user.name,
        due:due,
        no:user.phone
      })
    };
    let res = await fetch('/sendsms',requestOptions)
  }
  const getUser = async()=>{
    try{
      let res = await fetch(`/getcurrentuser`);
      res = await res.json();
      setHold(false);
      setUser(res.response);
      let res2 = await fetch('/getbill');
      res2 = await res2.json();
      setBill(res2.response.bills.reverse());
      let p = parseInt(res2.response.bills[0].total)-parseInt(res2.response.bills[0].payment);
      setDue(p);
      setStay(false);
    }catch(e){
      console.log(e.message);
    }
  }
  const pay = async()=>{
    let money = prompt("Enter Received Amount");
    if(!money){
      return;
    }
    let data = {
      money : money
    }
    try{
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      let res = await fetch('/payment',requestOptions);
      res = await res.json();
      alert("Payment Successfull!!");
      getUser();
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div id='cusDiv'>
        {hold?<marque>Please Wait</marque>:<><h1>{`${user.name}`}</h1>
        <p>{`Phone No: ${user.phone}`}</p>
        <p>{`Address: ${user.address}`}</p>
        </>}
        <button onClick={send}>Send Due Alert</button>
        <h2><button><NavLink to='/billing'>Generate New Bill</NavLink></button></h2>
        <h2><button onClick={pay}>Make Payment</button></h2>
        <h2>Balance Due: {due}</h2>
        {
          stay?<h1>Getting Bill....</h1>:<>
            {
              bill.map((item)=>{
                console.log(item.date);
                return <Bills {...item}/>
              })
            }
          </>
        }
    </div>
  )
}
