import React, { useState } from 'react';

const StudentRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nGender: ${gender}\nInterests: ${interests.join(', ')}`);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhoneNumber('');
    setGender('');
    setInterests([]);
  };

  const handleInterestChange = (event) => {
    const { value } = event.target;
    const isChecked = event.target.checked;
    setInterests((prevInterests) => {
      if (isChecked) {
        return [...prevInterests, value];
      } else {
        return prevInterests.filter((interest) => interest !== value);
      }
    });
  };

  return (<center>
    <form onSubmit={handleSubmit}>
      <label>
       <h3>Name:</h3> 
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        <h3>Email:</h3>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        <h3>Phone Number:</h3>
        <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      </label>
      <br />
      <label>
        <h3>Gender:</h3>
        <br />
        <label>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(event) => setGender(event.target.value)} />
          Male
        </label><br></br>
        <br />
        <label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(event) => setGender(event.target.value)} />
          Female
        </label><br></br>
        <br />
        <label>
          <input type="radio" name="gender" value="other" checked={gender === 'other'} onChange={(event) => setGender(event.target.value)} />
          Other
        </label>
      </label>
      <br />
      <label>
        <h3>Interests:</h3>
        <br />
        <label>
          <input type="checkbox" name="interests" value="reading" checked={interests.includes('reading')} onChange={handleInterestChange} />
          Reading
        </label>
        <br /><br></br>
        <label>
          <input type="checkbox" name="interests" value="music" checked={interests.includes('music')} onChange={handleInterestChange} />
          Music
        </label>
        <br /><br></br>
        <label>
          <input type="checkbox" name="interests" value="sports" checked={interests.includes('sports')} onChange={handleInterestChange} />
          Sports
        </label>
      </label>
      <br /><br></br>
      <button class="b1"type="submit">Submit</button>
      <button class="b2"type="button" onClick={handleReset}>Exit</button>
    </form></center>
  );
};

export default StudentRegistrationForm;
