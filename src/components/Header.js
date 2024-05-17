import React from 'react'

// Icons
import whiteBar from '../Icons/white_bar.svg'

const Header = () => {
  return <>
       <div className='header-container' style={{ "width": "100%","height": "70px","display": "flex","justify-content": "space-between","align-items": "center","padding": "0 30px","background-color":"#3b065e"}}>
           <div className='logo' style={{"color": "#9ca3af","font-size": "1.5rem", "z-index": "1"}}>logo</div>
           <div className='bar' style={{"width": "50px","cursor":"pointer"}}><img src={whiteBar} style={{"width": "100%",}}/></div>
       </div>
  </>
}

export default Header