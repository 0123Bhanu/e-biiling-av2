import React from 'react'
import './bill.css'
export default function SmallBills({name,quantity,rate,total}) {
  return (
    <div>
      <table border={2}>
        <tr>
            <td className='col'><span>{name}</span></td>
            <td className='col'><span>{quantity}</span></td>
            <td className='col'><span>{rate}</span></td>
            <td className='col'><span>{total}</span></td>
        </tr>
      </table>
    </div>
  )
}
