import React from 'react'

// Images
import ServiceImg from '../Images/image 4.jpg'
import ShapeBg from '../Images/image 5.png'
import development from '../Icons/development.svg'
import network from '../Icons/5G.svg'
import ai from '../Icons/AI.svg'
import automation from '../Icons/automation.svg';

const Service = () => {
  return <>
       <div className='bg'>
        <img src={ShapeBg} className="shapeBg"/>
      <div className='servicescontentContainer'>
         <div className='featuresImageContainer'>
           <img src={ServiceImg} alt="Features Image" className='featuresImage servicesImage'/>
         </div>

         <div className="eachFeaturesContainer eachServicesContainer">
           <div className='eachFeatures eachService'>
             <article className='Icons serviceIcons'><img src={development} alt="Development" className='IconsImage'/></article>
             <article className='eachServicesTitle'>Development</article>
           </div>

           <div className='eachFeatures eachService'>
             <article className='Icons serviceIcons'><img src={network} alt="Development" className='IconsImage'/></article>
             <article className='eachServicesTitle'>5G network</article>
           </div>

           <div className='eachFeatures eachService'>
             <article className='Icons serviceIcons'><img src={ai} alt="Development" className='IconsImage'/></article>
             <article className='eachServicesTitle'>AI products</article>
           </div>

           <div className='eachFeatures eachService'>
             <article className='Icons serviceIcons'><img src={automation} alt="Development" className='IconsImage'/></article>
             <article className='eachServicesTitle'>Automation</article>
           </div>
           
         </div>
     </div>

  </div>
  </>
}

export default Service