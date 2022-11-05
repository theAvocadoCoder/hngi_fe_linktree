import React from "react";
import { Form } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div id="contact__div">
      <Form method="post" id="contact__form">
        <div id="contact_header__div">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask about anything you have in mind.</p>
        </div>
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
                required
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
              required
            />
          </label>
          <label htmlFor="message">
            <span>Message</span>
            <textarea
              name="message" 
              id="message" 
              placeholder="Send me a message and I'll reply you as soon as possible..." 
              aria-label="message" 
              required
            />
          </label> 
          <label htmlFor="consent__checkbox">
            <input 
              type="checkbox" 
              name="consent__checkbox" 
              id="consent__checkbox"
              aria-label="Consent Checkbox" 
              required
            />
            <p>You agree to providing your data to Kelechi who may contact you</p>
          </label>
          <label htmlFor="btn__submit">
            <button type="submit" id="btn__submit">Send Message</button>
          </label>
        </div> 
      </Form>
      <Footer />
    </div>
  )
}
