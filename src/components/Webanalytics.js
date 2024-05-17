import React from 'react'

// Images
import ShapeBg from '../Images/image 5.png'
import AnalyticsImage from '../Images/image 6.jpg'


const Webanalytics = () => {
  return <>
      <div className='bg'>
            <img src={ShapeBg} className="shapeBg AnalyticsShapeBg"/>
        <div className='WebanalyticsContainer'>
            <img src={AnalyticsImage} className="AnalyticsImage"/>
            <div className='bluebg'></div>
            <div className='AnalyticsDesc'>
                <h1 className='AnalyticsHeader'>Web Analytics</h1>
                <p className='AnalyticsPara italic'>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                incidunt ut labore
                </p>
                <button className='btn'>Read More</button>
            </div>
        </div>

      </div>
      <div className='AboutContainer'>
            <h1 className='AboutUsHeader'>We are directly involved in t​he process<br/><span className="AboutusHeaderLine"></span></h1>
            <div className='AboutusContent'>
             <p className='AboutUsPara AboutUsPara1'>
                Nibh tortor id aliquet lectus. Platea dictumst 
                vestibulum rhoncus est pellentesque elit ullamcorper. 
                In hac habitasse platea dictumst quisque. 
             </p>
             <p className='AboutUsPara AboutUsPara2'>
                Non quam lacus suspendisse faucibus interdum. 
                Tempor nec feugiat nisl pretium. Mi in nulla posuere 
                sollicitudin aliquam ultrices. Quisque egestas diam 
                in arcu cursus euismod quis. Libero volutpat sed cras 
                ornare arcu dui vivamus arcu.
             </p>
             <button className='btn'>Read More</button>
            </div>
      </div>
  </>
}

export default Webanalytics