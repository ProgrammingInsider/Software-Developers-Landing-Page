import React from 'react'

// Images
import HeroImg from '../Images/hero image.jpg'

const Hero = () => {
  return <>
     <div className="bg">
        <div className="hero">
        
         <div className="hero_headline">
            <h1 className="hero_header">Web Software Developers</h1>
            <p className="hero_para">
            Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum 
            </p>
            <button className="btn hero_btn">Read More</button>
         </div>

         <div className="heroImage_container">
          <img src={HeroImg} className="hero_image"/>
         </div>
        </div> 
     </div>
  </>
}

export default Hero