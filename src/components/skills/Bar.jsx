import React from 'react'
import './skills.css'

const Bar = (props) => {
  return (
      <li className='list'>
        <h3>{props.skill}</h3>
        <span className="bar"><span className={props.skill}></span></span>
      </li>
  )
}

export default Bar
