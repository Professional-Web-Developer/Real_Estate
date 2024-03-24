import React from 'react'
import classes from './footer.module.css'
import { IconButton } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper} id='footer'>
        <div className={classes.col}>
          <h2>About the App</h2>
         
          <p>This is one of the best place for choose your
             Luxury Life all over the world.And you can sell
              your land for profit.Every area in this World in
               this page for Luxury.</p>
         
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <div className={classes.contact_container}>
          <span className={classes.icon}><IconButton>
      <a href="https://github.com/Professional-Web-Developer" target='_blank'>
      <GitHub /></a>
     </IconButton> <a href="https://github.com/Professional-Web-Developer" target='_blank'><strong>Github</strong></a></span>
     <span className={classes.icon}> <IconButton>
      <a href="https://www.linkedin.com/in/kavin-pasupathy-839010289/" target='_'>
      <LinkedIn /></a>
     </IconButton> <a href="https://www.linkedin.com/in/kavin-pasupathy-839010289/" target='_'><strong>LinkedIn</strong></a></span>
     {/* <span><IconButton>
      <a href="https://www.instagram.com/kavinpasupathy/" target='_blank'>
      <Instagram /></a>
     </IconButton></span> */}
     <span><IconButton>
      <a>
      <Email /></a>
     </IconButton><strong>pasupathy.kavinmca@gmail.com</strong></span>
     
     <span><IconButton>
      <a>
      <Phone /></a>
     </IconButton><strong>+918667328882</strong></span>
     
     </div>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent:Asia</span>
          <span>Country:India</span>
          <span>Current Location:Tamil Nadu</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer