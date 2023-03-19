import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {ImInstagram} from 'react-icons/im'
import {ImGithub} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/harsh-agarwal-a2249313b" target="_blank" rel="noreferrer"><ImLinkedin/></a>
      <a href="https://www.instagram.com/harsh._18/" target="_blank" rel="noreferrer"><ImInstagram/></a>
      <a href="https://github.com/RandomLorem" target="_blank" rel="noreferrer"><ImGithub/></a>
    </div>
  )
}

export default HeaderSocials
