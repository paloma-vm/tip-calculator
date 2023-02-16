/* src/Form.css */
import React from 'react';
import './Form.css';
import { useState } from 'react';

function Form() {
 const [bill, setBill] = useState('0.00')
 const [percentage, setPercentage] = useState('15')
 const [number_of_ways, setNumberOfWays] = useState('1')

 const decimal_tip = percentage / 100
 const total_tip = bill * decimal_tip
 const total_bill = bill * total_tip // bill plus the tip
 const tip_per_way = total_tip / number_of_ways
 const total_per_way = total_bill /number_of_ways


  return (
    <div className='Form'>
      <form>
        <label for="bill">Bill</label>
        <input 
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value )}
        />

        <label for="percentage">Tip %</label>
        <input 
          type="number"
          value={percentage}
          min="0"
          max="100"
          onChange={(e) => setPercentage(e.target.value )}
        />
     
        <label for="number_of_ways">Number of ways to split the bill</label>
        <input 
          type="number"
          value={number_of_ways}
          min="1"
          max="1000"
          onChange={(e) => setNumberOfWays(e.target.value )}
        />
       
      </form>
      <div className='display'>
        <div className='tip'>
          <h2>Tip</h2>
          <p>per way</p>
          <h1>{tip_per_way}</h1>

        </div>
        <div className='total'>
          <h2>Total</h2>
          <p>per way</p>
          <h1>{total_per_way}</h1>
          
        </div>

      </div>
    </div>
  )
}


export default Form;