import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='#home'>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Harsh Agarwal</h1>
            <h5 className="text-light">Programmer and MERN Stack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
                <img src={me} alt=""/>
            </div>  
            <div className="email">
                harshagarwal.200310@gmail.com
            </div>
        </div>
    </header>
  )
}

export default Header
