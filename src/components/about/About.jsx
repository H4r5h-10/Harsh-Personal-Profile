import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>More</h5>
      <h2>About Me</h2>
      <div className="content__container">
        <img src="https://i.picsum.photos/id/66/200/300.jpg?hmac=zvcP8mVCNIMoM5f8iC-xSgDhR1VklmBY2SON28P4TOo" alt="" />
        <div className="text">
        Hello, my name is Harsh Agarwal and I am currently an undergraduate student pursuing a B.Tech degree in Mathematics and Computing at Delhi Technological University. I have a passion for coding and love to develop beautiful websites. I believe that technology has the power to change the world and I am excited to be a part of this rapidly evolving field. I am constantly seeking new challenges and opportunities to improve my skills and make a positive impact in the world through my work. Thank you for visiting my website, I hope you enjoy exploring it!
        </div>
      </div>
    </section>
  )
}

export default About
