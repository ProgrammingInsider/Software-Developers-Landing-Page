import React from 'react'

// Images
import FeaturesImg from '../Images/photo 1.jpg'
import development from '../Icons/development.svg'
import skills from '../Icons/topskills.svg'
import design from '../Icons/design.svg'
import responsive from '../Icons/responsive.svg';


const Features = () => {
  return <>
  <div className='FeaturesContainer'>
     <div className='featuresSectionHeader'>
           <h1 className='featuresSectionHeader_heading'>Key Features</h1>
           <p className='featuresSectionHeader_para'>Sample text. Click to select the text box. 
            Click again or double click to start editing the text.</p>
     </div>

     <div className='featurescontentContainer'>
         <div className='featuresImageContainer'>
           <img src={FeaturesImg} alt="Features Image" className='featuresImage'/>
         </div>

         <div className="eachFeaturesContainer">
           <div className='eachFeatures developmentFeatures'>
             <article className='Icons'><img src={development} alt="Development" className='IconsImage'/></article>
             <article className='eachFeaturesTitle'>Development</article>
           </div>

           <div className='eachFeatures topSkillsFeatures'>
             <article className='Icons'><img src={skills} alt="Development" className='IconsImage'/></article>
             <article className='eachFeaturesTitle'>Development</article>
           </div>

           <div className='eachFeatures designFeatures'>
             <article className='Icons'><img src={design} alt="Development" className='IconsImage'/></article>
             <article className='eachFeaturesTitle'>Design</article>
           </div>

           <div className='eachFeatures responsiveFeatures'>
             <article className='Icons'><img src={responsive} alt="Development" className='IconsImage'/></article>
             <article className='eachFeaturesTitle'>responsive</article>
           </div>
           
         </div>
     </div>

  </div>
          
  </>
}

export default Features