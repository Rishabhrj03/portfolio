import React, { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';
import swal from 'sweetalert';

import contactImg from './img/about-9.jpg';
import './Contact.css';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log('Error ----> ', form.current.getValue());

    // console.log('Error ----> ', form.current);
    // form.current.value = '';
    // form.current.reset();
    emailjs
      .sendForm(
        'service_df7gozu',
        'template_ykhyqvb',
        form.current,
        'user_zPzdn3a9lyUMZdetDjd0c'
      )
      .then(
        (result) => {
          console.log(result.text);
          swal('Thank you!', 'Your message send Successfully!', 'success');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='contact component__space' id='Contact'>
      <div className='row'>
        <div className='col__2'>
          <div className='contact__box'>
            <div className='contact__meta'>
              <h1 className='hire__text'>Hire Me.</h1>
              <p className='hire__text white'>Connect with me via phone:</p>
              <p className='hire__text white'>
                <strong>+91- 9893729684</strong> or email{' '}
                <strong>rishabhskjoshi@gmail.com</strong>
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className='input__box'>
              <input
                type='text'
                className='contact name'
                placeholder='Your name *'
                name='name'
                id='name'
              />
              <input
                type='text'
                className='contact email'
                placeholder='Your Email *'
                name='email'
                id='email'
              />
              <input
                type='text'
                className='contact subject'
                placeholder='Write a Subject'
                name='subject'
                id='subject'
              />
              <textarea
                name='message'
                id='message'
                placeholder='Write Your message'
              ></textarea>
              <input
                type='submit'
                value='Submit'
                className='btn pointer'
              ></input>
              {/* <button type='submit'>Submit</button> */}
            </form>
          </div>
        </div>
        <div className='col__2'>
          <img
            src={contactImg}
            alt=''
            className='contact__img d-sm-none'
            style={{ height: '550px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
