import React from 'react';
import { useState } from 'react';

function ContactForm() {
  const [fullName, setFullName] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'fullName') {
      setFullName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setFullName('');
  };

  return (
    <form>
      <div className="form-group">
        <h2>Contact Me!</h2>
        <label htmlFor="Full Name">Full Name</label>
        <input
          onChange={handleInputChange}
          value={fullName}
          name="fullName"
          type="text"
          placeholder="Full Name"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
