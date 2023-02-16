import React from 'react';
import './NameForm.css';
import { useState } from 'react'


function NameForm() {
  const [name, setName] = useState('')

  return (
    <div className='NameForm'>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default NameForm;