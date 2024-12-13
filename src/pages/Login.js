import React, { useState } from 'react'
import '../pages/login.css'
export default function Login({setLogged}) {
  const [data,setData] = useState({
    name:"",
    pass:""
  })
  const inputHandler = (e)=>{
    const {name,value} = e.target;
    setData({...data,
      [name]:value}
    )
    console.log(data);
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    if(data.name=="sougata" && data.pass=="1234"){
      setLogged(true);
    }else{
      alert("Wrong credentials entered!!");
    }
  }
  return (
    <div className="login-container">
        <h2>Login</h2>
        <form action="#" method="POST" className="login-form" onSubmit={submitHandler}>
            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="name" required value={data.name} onChange={inputHandler}/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="pass" required value={data.pass} onChange={inputHandler}/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
