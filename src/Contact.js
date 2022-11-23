import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import ThankYou from  './Thankyou'; 
 
// npm i @emailjs/browser
 
const Contact = () => {
  

  const form = useRef();

 
  const sendEmail = (e) => {
    e.preventDefault();
    
    
 
    emailjs
      .sendForm(
        "service_hke3oqd",
        "template_odg5gm6",
        form.current,
        "7XzuGFqC7w-jNN4J3"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
 
  return (
    <div>
      <StyledContactForm style={{float:"right"}}>
      <form ref={form} onSubmit={()=>sendEmail()} >
      <h2>We Challenge The Most Competitive Rate</h2>
      <h5>Schedule A Free Site Visit to avail never-before-seen-offers</h5>

      
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Phone</label>
        <input type="number" name="contact_number"/>
        
        <label>Email</label>
        <input type="email" name="user_email"/>
        
        
        <input type="submit" value="Submit Now" />

       
       <button><ThankYou /></button> 
       
        
      </form>
    </StyledContactForm>
    </div>
   
  );
};
 
export default Contact;
 
// Styles
const StyledContactForm = styled.div`
 marginTop: 200px;
  width: 300px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 98%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 35px;
      min-height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #015b51;
      color: white;
      border: none;
    }
  }
`;
