import React from 'react'
import SmallBills from './SmallBills'
import './bill.css'
export default function Bills({date,smallbills,payment,total}) {
  return (
    <div>
      <h1>{date}</h1>
      <table border={2}>
        <tr>
            <th className='col'>Name</th>
            <th className='col'>Quantity</th>
            <th className='col'>Rate</th>
            <th className='col'>Total</th>
        </tr>
      </table>
      {
        smallbills.map((i,idx)=>{
            console.log(idx);
            return <SmallBills {...i}/>
        })
      }
      <table border={2}>
        <tr>
            <th className='col'><h3>Net Amoumt</h3></th>
            <th className='col'>--</th>
            <th className='col'>--</th>
            <th className='col'><h3>{total}</h3></th>
        </tr>
      </table>
      <h2>Paid on: {date}: {payment}</h2>
    </div>
  )
}
