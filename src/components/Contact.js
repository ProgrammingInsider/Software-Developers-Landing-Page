import React from 'react'

// Icons

import location from '../Icons/location1.svg'
import email from '../Icons/email.svg'
import phone from '../Icons/phone.svg'


const Contact = () => {
  return <>
     <div className='contactContainer'>
              <h1 className='contactHeader'>Get In Touch</h1>
              <p className='contactPara'>We align leaders around a shared purpose and strategic 
                story that catalyzes their business and brand to take 
                action.
              </p>

              <div className='contactMethod'>
                <div className='eachContactMethod'>
                    <article className='contactIconContainer'><img src={location} className="contactIcon"/></article>
                    <article className='contactName'>Address</article>
                    <article className='contactaddress'>121 Rock Sreet, 21 Avenue,
                    New York, NY 92103-9000</article>
                </div>

                <div className='eachContactMethod'>
                    <article className='contactIconContainer'><img src={email} className="contactIcon"/></article>
                    <article className='contactName'>Email</article>
                    <article className='contactaddress'>amanuelabera46@gmail.com</article>
                </div>

                <div className='eachContactMethod'>
                    <article className='contactIconContainer'><img src={phone} className="contactIcon"/></article>
                    <article className='contactName'>Phone</article>
                    <article className='contactaddress'>1 (234) 567-891<br/>1 (234) 987-654</article>
                </div>

              </div>
     </div>
  </>
}

export default Contact