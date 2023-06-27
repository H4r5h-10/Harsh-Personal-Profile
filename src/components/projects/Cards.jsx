import React from 'react'
import {IoLogoGithub} from 'react-icons/io'
const Cards = (props) => {
  return (
    <div className="card">
        <div className='card-item-image'>
            <img src={props.url} alt="" height="200px" width="100px"/>
        </div>
        <p className='pro-para'>{props.desc}</p>
        <div className="pro-buttons">
            <a href={props.github} className='btn' target="_blank" rel="noreferrer">Github<IoLogoGithub/></a>
            <a href={props.link} className='btn btn-primary' target="_blank" rel="noreferrer">Open Page</a>
        </div>
        
      </div>
  )
}

export default Cards
