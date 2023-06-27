import React from 'react'
import './about.css'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.section id='about'
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.5, delay: 0.2}}
    viewport={{once:true}}
    >
      <h5>More</h5>
      <h2>About Me</h2>
      <div className="content__container">
        
        <div className="text">
        Hello, my name is Harsh Agarwal and I am currently an undergraduate student pursuing a B.Tech degree in Mathematics and Computing at Delhi Technological University. I have a passion for coding and love to develop beautiful websites. I believe that technology has the power to change the world and I am excited to be a part of this rapidly evolving field. I am constantly seeking new challenges and opportunities to improve my skills and make a positive impact in the world through my work. Thank you for visiting my website, I hope you enjoy exploring it!
        </div>
        <div className="row">
          <div className="col">
            <h2 className='title'>Education</h2>
            <div className="contents">
              <motion.div className="box" 
                    initial={{opacity: 0, y: 75}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 0.5}}
                    viewport={{once:true}}
              >
                <h4>2021-Present</h4>
                <h3>B. Tech from Delhi technological Univeristy</h3>
                <p>Pursuing B. Tech in Mathematics and Computing from Delhi Technological University with major in Mathematics.</p>
              </motion.div>
              <motion.div className="box"
              initial={{opacity: 0, y: 75}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 0.5}}
              viewport={{once:true}}
              >
                <h4>2021</h4>
                <h3>Completed Schooling from Lovely Public School</h3>
                <p>Completed Senior and Secondary from Lovely Public School, New Delhi, affiliated with CBSE Board.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
