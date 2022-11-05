import React from "react";
import { Form } from "react-router-dom";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div id="contact__div">
    <Form method="post" id="contact__form">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask about anything you have in mind.</p>
      <div id="form_fields__div">
        <div id="names__div">
          <label htmlFor="first_name">
            <span>First name</span>
            <input 
              type="text" 
              name="first_name" 
              id="first_name" 
              placeholder="Enter your first name" 
              aria-label="First Name" 
            />
          </label>
          <label htmlFor="last_name">
            <span>Last name</span>
            <input 
              type="text" 
              name="last_name" 
              id="last_name" 
              placeholder="Enter your last name" 
              aria-label="Last Name" 
            />
          </label>
        </div>
        <label htmlFor="email">
          <span>Email</span>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="yourname@email.com" 
            aria-label="Email" 
          />
        </label>
        <label htmlFor="message">
          <span>Message</span>
          <textarea
            name="message" 
            id="message" 
            placeholder="Send me a message and I'll reply you as soon as possible..." 
            aria-label="message" 
          />
        </label> 
        <label htmlFor="consent__checkbox">
          <input 
            type="checkbox" 
            name="first_name" 
            id="first_name" 
            placeholder="FirstName" 
            aria-label="First Name" 
          />
          <span>You agree to providing your data to Kelechi who may contact you</span>
        </label>
        <label htmlFor="btn__submit">
          <button type="submit">Send Message</button>
        </label>
      </div> 
    </Form>
    <Footer />
    </div>
  )
}
