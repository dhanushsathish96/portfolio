import React from "react";
import "./Contact.css";
import { useState,useEffect } from "react";

function Contact() {
  const[status,setStatus]=useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xwpnyrla",{
      method : "POST",
      body : data,
      headers : { Accept : "application/json",},
    })

    if(response.ok){
      setStatus("Success");
      form.reset();
    }
    else{
      setStatus("Error")
    }
  }

useEffect(() => {
  if (status === "Success") {
    alert("Thank You!!, Message Sent Successfully");
  } else if (status === "Error") {
    alert("Something Went Wrong!!");
  }
}, [status]); 


  return (
    <section className="contact" id="contact">
      <h1>CONTACT ME</h1>

      <div className="contactcontainer">

        <form className="contactform" onSubmit={handleSubmit} >
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required/>
          <textarea name="message"placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contactinfo">
          <h2>Get in Touch</h2>
          <p>Email: dhanushsathish96@gmail.com</p>
          <p>Phone: +91 9620504580</p>

          <div className="socialicons">
            <a href="https://wa.me/9620504580" target="_blank" className="what">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="//www.instagram.com/dhanush__sathish/" target="_blank" className="inst">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="//www.linkedin.com/in/dhanush-sathish-92ba64325/" target="_blank" className="lin">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" target="_blank" className="gh">
              <i className="bi bi-github"></i>
            </a>
            </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
