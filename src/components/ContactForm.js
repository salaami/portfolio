import React, {useState} from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
      <div >
        <form onSubmit={handleSubmit} className="form-box">
          <h2>Contact Form</h2>
          <div>
            <input placeholder="Name" type="text" id="name" required />
            <input placeholder = "Email" type="email" id="email" required />
            <textarea placeholder="Message" id="message" required />
          </div>
          <button className="submitBtn" type="submit">{status}</button>
        </form>
      </div>
    );
  };


export default ContactForm;