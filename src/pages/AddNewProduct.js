import React, { useEffect, useState } from 'react'
import './addproduct.css'
export default function AddNewProduct() {
  const [data,setData] = useState({productName:"",productQuantity:"",productPrice:""});
  const [products,setProducts] = useState([]);
  let sugg = document.getElementById('suggestions');
  useEffect(()=>{
    getProducts(data.productName);
  },[data.productName])
  const inputHandler = (e)=>{
    const {name,value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }
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
  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      let res = await fetch('/addproduct',requestOptions);
      res = await res.json();
      console.log(res);
      if(res.success==true){
        alert('Product added!!');
        setData({productName:"",productQuantity:"",productPrice:""});
        setProducts([]);
      }else{

      }
    }catch(e){
      alert(`Product can't be added!!`);
    }
  }
  const setName = (e)=>{
    data.productName = e.target.value;
  }
  return (
      <div class="container1">
        <h2>Add Product Details</h2>
        <form class="product-form" onSubmit={submitHandler}>
            <div>
                <label for="productName">Product Name</label>
                <input type="text" id="productName" name="productName" value={data.productName} onChange={inputHandler} required/>
            </div>
            <div id='suggestions'>
            <h5>Available Products</h5>
              {
                products.map((item)=>{
                  return <><li style={{border:'1px solid black',width:'100%',padding:'.5rem',background:'#98bded',listStyle:'none'}} onClick={()=>{
                    setData({
                      ...data,
                      productName:item.productName
                    })
                    sugg.classList.add('hide');
                    console.log(item.productName);
                  }}>{item.productName}</li><br/></>
                })
              }
            </div>
            <div class="form-group">
                <label for="productQuantity">Product Quantity</label>
                <input type="number" id="productQuantity" name="productQuantity" value={data.productQuantity} onChange={inputHandler} required/>
            </div>
            <div class="form-group">
                <label for="productPrice">Product Price</label>
                <input type="number" id="productPrice" name="productPrice" step="0.01" value={data.productPrice} onChange={inputHandler} required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
