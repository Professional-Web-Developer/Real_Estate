import React from 'react'
import classes from './newsletter.module.css'
import { FiSend } from 'react-icons/fi'
import { useState } from 'react'


const Newsletter = () => {
  const [emailBody, setEmailBody] = useState('');
  const sendEmail = () => {
    // Replace 'recipient@example.com' with the email address you want to send the email to
    const recipientEmail = 'pasupathy.kavinmca@gmail.com';
    
    // Replace 'subject' with your desired email subject
    const subject ="Real-Estate";
    
    // Replace 'body' with your desired email body
    

    // Construct the mailto link with recipient, subject, and body parameters
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the default email client with the mailto link
    window.open(mailtoLink);
  };
  const handleInputChange = (e) => {
    setEmailBody(e.target.value);
  };
  return (
    <div className={classes.container} id='contacts'>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Want to get the latest offers?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className={classes.inputContainer}>
          <input type="email" placeholder='Type email...' value={emailBody}
        onChange={handleInputChange}
        className={classes.emailBodyInput} />
          <FiSend className={classes.sendIcon} onClick={sendEmail}/>
        </div>
       
      </div>
    </div>
  )
}

export default Newsletter