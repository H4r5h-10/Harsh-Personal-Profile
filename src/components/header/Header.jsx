import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import {motion} from 'framer-motion'


const Header = () => {
  
  return (
    <motion.header id='#home'
      initial={{opacity: 0, y: 75}}
      animate={{opacity:1, y:0}}
      transition={{duration: 0.5}}
      viewport={{once:true}}
    >
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Harsh Agarwal</h1>
            <h5 className="text-light">Programmer and Frontend Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
                <img src={me} alt=""/>
            </div>  
            <div className="email">
                harshagarwal.200310@gmail.com
            </div>
        </div>
    </motion.header>
  )
}

export default Header
