import React from 'react';
import rightSide from '../assets/contact.jpg';
import '../style/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='LeftSide'>
            <h1>Contact Us</h1>
            <form id='Contact-Form' method='POST'>
                <label htmlfor ="name">Name</label>
                <input name='name' type={'text'} placeholder="Enter Name"/>
                <label htmlfor ="email">Email</label>
                <input name='email' type={'email'} placeholder="Enter Email"/>
                <label htmlFor='message'>Message</label>
                <textarea name ="message" rows={5} placeholder="Type your suggestion here."></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
        <div className='RightSide' style={{ backgroundImage: `url(${rightSide})` }}></div>
      
    </div>
  )
}

export default Contact
