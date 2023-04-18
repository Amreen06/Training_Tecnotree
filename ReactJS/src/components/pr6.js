import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form class="aa"onSubmit={handleSubmit}>
      <div>
        <label>
          <h3>Name:</h3>
          <input class="a" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label><br></br>
      </div>
      <div>
        <label>
          <h3>Email:</h3>
          <input class="a" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
         <h3> Message:</h3>
          <textarea class="b" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
      </div>
      <button class="b1" type="submit">Submit</button>
      <button class="b2" type="submit">Exit</button>
    </form>
  );
}

export default ContactForm;
