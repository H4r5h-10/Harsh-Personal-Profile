import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {SiLeetcode} from 'react-icons/si'
import {ImGithub} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/harsh-agarwal-a2249313b" target="_blank" rel="noreferrer"><ImLinkedin/></a>
      <a href="https://leetcode.com/harsh_ag10/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      <a href="https://github.com/H4r5h-10" target="_blank" rel="noreferrer"><ImGithub/></a>
    </div>
  )
}

export default HeaderSocials
