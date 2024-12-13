import React, { useEffect, useState } from 'react'
import Item from '../components/Item';
import './allproduct.css'
export default function AllProduct() {
  const [find,setFind] = useState('all');
  const [hold,setHold] = useState(true);
  const [product,setProduct] = useState([]);
  useEffect(()=>{
    getProduct(find);
  },[find])
  const inputHandler = (e)=>{
    setFind(e.target.value);
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    getProduct(find);
  }
  const getProduct = async(finder)=>{
    try{
      let res = await fetch(`/getproduct/${finder}`);
      res = await res.json();
      setHold(false);
      setProduct(res.response);
      console.log(product);
    }catch(e){

    }
  }
  return (
    <>
    <button className='allBtn' onClick={()=>{
      setFind("");
      getProduct('all');
    }}>Get All Products</button><br/>
    <input value={find} onChange={inputHandler} name='find' id='srin' placeholder='Search something!!'/><br/>
    <button onClick={submitHandler} id='srbtn'>Search</button>
    <div id='mainPd'>
      {
        hold?<marquee>Please Wait</marquee>:<>
        {
        product.map((item)=>{
          return <Item {...item}/>
        })
        }
        </>
      }
    </div>
    </>
  )
}
