import { useState } from 'react';
import { validateEmail, toTitleCase } from '../utils/helpers';

function ContactForm() {
  const defaultErrorMessage =
    'Validation Works, does not send message yet due to no backend';
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setFullName(inputValue);
    }

    if (inputType === 'email') {
      setEmailAddress(inputValue);
    }

    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleLostFocus = (event) => {
    const { target } = event;
    const inputName = target.name;
    const inputValue = target.value;

    // If the field is blank, tell the user that it's required.
    if (inputValue === '') {
      setErrorMessage(`${toTitleCase(inputName)} is required.`);
      return;
    }

    // If there's something in the email text box, check to see if it's a valid email address
    if (inputName === 'email') {
      if (!validateEmail(inputValue)) {
        setErrorMessage('Invalid Email Address.');
        return;
      }
    }

    //Clear error message if inputs are valid
    if (fullName && message && validateEmail(emailAddress)) {
      setErrorMessage('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (fullName && emailAddress && message) {
      //Logic to send the message to me will go here, but we have no backend so I will leave it like this for now
      alert('Message Sent!');
      setErrorMessage(defaultErrorMessage);
    }

    //Clears form inputs
    setFullName('');
    setEmailAddress('');
    setMessage('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <h2>Contact Me!</h2>
          <div className='form-inputs'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              value={fullName}
              name='name'
              placeholder='Name'
              onChange={handleInputChange}
              onBlur={handleLostFocus}
            />

            <label htmlFor='Email'>Email Address</label>
            <input
              type='text'
              value={emailAddress}
              name='email'
              placeholder='Email Address'
              onChange={handleInputChange}
              onBlur={handleLostFocus}
            />

            <label htmlFor='Message'>Message</label>
            <textarea
              name='message'
              value={message}
              rows='10'
              placeholder='Message'
              onChange={handleInputChange}
              onBlur={handleLostFocus}
            />

            <input type='submit' text='Submit' className='sub-btn' />
          </div>
        </div>
      </form>
      <br />
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
}

export default ContactForm;
