import React from 'react'

// Images
import ITImg from '../Images/image 3.jpg'

const ITsolutions = () => {
  return <>
   <div className="bg ITSolutions_bg">
        <div className="hero" id='ITSolutions_container'>
        
         <div className="hero_headline">
            <h1 className="hero_header ITSolutions_header">IT solutions</h1>
            <p className="hero_para ITSolutions_para">
            We collaborate with you to create new 
            value through digital transformation. 
            We have hundreds of specialists at your 
            service.
            </p>
            <button className="btn hero_btn">Learn More</button>
         </div>

         <div className="heroImage_container">
          <img src={ITImg} className="hero_image"/>
         </div>
        </div> 
     </div>
  </>
}

export default ITsolutions