import React, { useState,useEffect } from 'react';
import './billing.css';
import { NavLink } from 'react-router-dom';
export default function Billing() {
  const [data, setData] = useState({
    name: "",
    quantity: ""
  });
  const [products,setProducts] = useState([]);
  let sugg = document.getElementById('suggestions');
  useEffect(()=>{
    getProducts(data.name);
  },[data.name]);
  const getProducts = async(finder)=>{
    try{
      let res = await fetch(`/getproduct/${finder}`);
      res = await res.json();
      console.log(res);
      setProducts(res.response);
      sugg.classList.remove('hide');
    }catch(e){

    }
  }
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      let res = await fetch('/setbill',requestOptions);
      res = await res.json();
      if (res.success === false) {
        alert("Product Unavailable Or More Quantity Entered than Stock");
      } else {
        alert("Billing Done");
        setData({
          name: "",
          quantity: ""
        });
        setProducts([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        Product: <input type='text' name="name" value={data.name} required onChange={inputHandler}/>
        <div id='suggestions'>
            <h5>Available Products</h5>
              {
                products.map((item)=>{
                  return <><li style={{border:'1px solid black',width:'100%',padding:'.5rem'}} onClick={()=>{
                    setData({
                      ...data,
                      name:item.productName
                    })
                    sugg.classList.add('hide');
                    // console.log(item.productName);
                  }}>{item.productName}</li><br/></>
                })
              }
            </div>
        Quantity: <input type='text' name="quantity" value={data.quantity} required onChange={inputHandler}/><br/><br/>
        <button>Add</button><br/><br/>
      </form>
      <button><NavLink to='/customerpage'>Go To Dashboard</NavLink></button>
    </div>
  );
}
