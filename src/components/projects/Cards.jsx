import React from 'react'
import {IoLogoGithub} from 'react-icons/io'
const Cards = (props) => {
  return (
    <div className="card">
        <div className='card-item-image'>
            <img src={props.url} alt="" />
        </div>
        <p className='pro-para'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="pro-buttons">
            <a href="/" className='btn' target="_blank" rel="noreferrer">Github<IoLogoGithub/></a>
            <a href="#contact" className='btn btn-primary'>Open Page</a>
        </div>
        
      </div>
  )
}

export default Cards
