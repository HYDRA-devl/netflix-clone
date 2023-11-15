import React, { useState } from 'react';
import './MyComponent.css';
const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the email
    console.log('Email submitted:', email);
  };

  return (
    <form className='formquery'
      
      onSubmit={handleSubmit}
    >
      <input className='inputquery'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      
      />
      <button className='buttonquery'
        type="submit"
       
      >
        Commencez
      </button>
    </form>
  );
};

export default EmailForm;
