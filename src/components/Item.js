import React from 'react'
import './item.css'
export default function Item({productName,productQuantity,productPrice}) {
  return (
    <div id='pdDiv'>
      <h3>Name: {productName}</h3>
      <p>Quantity: {productQuantity}</p>
      <p>Price: {productPrice}</p>
    </div>
  )
}
