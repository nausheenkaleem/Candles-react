import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import '../style/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='Icons'>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedinIcon/>
        </div>
        <p> &copy; 2022 NausheenKaleem Candles&Co.com  </p>
      
    </div>
  );
}

export default Footer
