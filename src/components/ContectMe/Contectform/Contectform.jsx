import React, { useRef } from 'react';
import './Contectform.css';
import emailjs from '@emailjs/browser';

const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const formFields = form.current.elements;
    if (
      !formFields.firstname.value ||
      !formFields.lastname.value ||
      !formFields.email.value ||
      !formFields.message.value
    ) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    emailjs.sendForm('service_i4rw9vk', 'template_v11dxuc', form.current, 'FFmpMDUxeqn0l4clP')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.message);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className='contact-form-content'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='name-container'>
          <input type='text' name='firstname' placeholder='First Name' required />
          <input type='text' name='lastname' placeholder='Last Name' required />
        </div>
        <input type='email' name='email' placeholder='Email' required />
        <textarea name='message' placeholder='Message' rows={3} required />
        <input type="submit" value="SEND" />
      </form>
    </div>
  );
};

export default Contactform;
