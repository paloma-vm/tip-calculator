/* src/Form.css */
import React from 'react';
import './Form.css';
import { useState } from 'react';

function Form() {
 const [bill, setBill] = useState('0.00')
 const [percentage, setPercentage] = useState('15')
 const [number_of_ways, setNumberOfWays] = useState('1')

 const decimal_tip = percentage / 100
 const total_tip = (bill * 1) * decimal_tip // bill * 1 makes bill a number
 // ^ help from https://flaviocopes.com/how-to-convert-string-to-number-javascript/
 const total_bill = (bill * 1) + total_tip // bill plus the tip
 const tip_per_way = total_tip / (number_of_ways * 1)
 const total_per_way = total_bill / (number_of_ways * 1)
 const display_tip = (Math.round(tip_per_way * 100) / 100).toFixed(2)
 const display_total = (Math.round(total_per_way * 100) / 100).toFixed(2)
 

// I would like to add increment buttons and do more styling in the future

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
          onChange={(e) => setPercentage(e.target.value)}
        />
     
        <label for="number_of_ways">Number of ways to split the bill</label>
        {/* <button>-</button> */}
        <input 
          type="number"
          value={number_of_ways}
          min="1"
          max="1000"
          onChange={(e) => setNumberOfWays(e.target.value )}  
        />
        {/* <button>+</button> */}
        
      </form>
      <div className='display'>
        <div className='tip'>
          <div>
            <h2>Tip</h2>
            <p>per way</p>
          </div>
          <h1>${display_tip}</h1>

        </div>
        <div className='total'>
          <div>
            <h2>Total</h2>
            <p>per way</p>
          </div>
          <h1>${display_total}</h1>
          
        </div>

      </div>
    </div>
  )
}


export default Form;