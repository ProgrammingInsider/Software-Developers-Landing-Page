import React from 'react'

// Images
import ITImg from '../Images/image 2.jpg'

const DataVisualization = () => {
  return <>
       <div className="bg">
        <div className="hero">
        
         <div className="heroImage_container">
         <h1 className="hero_header">Data Visualization</h1>
          <img src={ITImg} className="hero_image"/>
         </div>

         <div className="hero_headline DataV_headline">
           <div className='sub_headline'>
              <h3 className='DataV_header'>01. GOALS</h3>
              <p className='DataV_para'>
              Sample text. Click to select the text box. 
              Click again or double click to start editing the text.
              </p>
              <p className='seeMore_btn'>More</p>
           </div>
           <div className='sub_headline'>
              <h3 className='DataV_header'>02. STRATEGY</h3>
              <p className='DataV_para'>
              Sample text. Click to select the text box. 
              Click again or double click to start editing the text.
              </p>
              <p className='seeMore_btn'>More</p>
           </div>
         </div>

        </div> 
     </div>
  </>
}

export default DataVisualization