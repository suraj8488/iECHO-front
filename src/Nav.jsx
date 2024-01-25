import echologo from './assets/echo_2x (1).png'
import React from 'react';
import './app.css'
const Nav = () => {
  return (
    <div>
       <nav>
           <img src={echologo} />
            <div class="help"><a href="https://projectecho.notion.site/iECHO-Help-Center-1e3301587de24775a6abd9100f937682">?</a></div>
        </nav>
    </div>
  )
}

export default Nav
