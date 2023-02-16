import React from 'react';
import './FormThing.css';
import { useState } from 'react';

function FormThing() {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')

  return (
    <form>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value )}
      />
      <h1>{name}</h1>

      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value )}
      />
      <h1>{email}</h1>
    </form>
  )
}


export default FormThing;