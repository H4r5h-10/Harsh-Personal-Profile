import React from 'react'
import './navbar.css'
import {BiHomeCircle} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {MdOutlineDesignServices} from 'react-icons/md'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {MdOutlineContactMail} from 'react-icons/md'
import { useState } from 'react'


const Navbar = () => {
  const [activeNav, setActive] = useState('/');

  return (
    <nav className='navigate'>
      <a href='/' onClick={ () => setActive('#')} className={activeNav === '/'?'active':' '}><BiHomeCircle/></a>
      <a href='#about' onClick={ () => setActive('#about')} className={activeNav === '#about'?'active':' '}><BsPerson/></a>
      <a href='#skills' onClick={ () => setActive('#skills')} className={activeNav === '#skills'?'active':' '}><MdOutlineDesignServices/></a>
      <a href='#projects' onClick={ () => setActive('#projects')} className={activeNav === '#projects'?'active':' '}><MdOutlineWorkOutline/></a>
      <a href='#contact' onClick={ () => setActive('#contact')} className={activeNav === '#contact'?'active':' '}><MdOutlineContactMail/></a>
    </nav>
  )
}

export default Navbar
