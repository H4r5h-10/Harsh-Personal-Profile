import React from 'react'
import './skills.css'
import Bar from './Bar'
import {motion} from 'framer-motion'

const Skills = () => {

  return (


    <motion.section id='skills'
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.5, delay: 0.2}}
      viewport={{once:true}}
    >
      <h5>My</h5>
      <h2>Skills</h2>
      <div className='skill__container'>
        <div className='inner'>
          <Bar skill='HTML'/>
          <Bar skill='CSS'/>
          <Bar skill='JavaScript'/>
          <Bar skill='ReactJs'/>
        </div>
        <div className='inner'>
          <Bar skill='TypeScript'/>
          <Bar skill='NextJs'/>
          <Bar skill='C'/>
          <Bar skill='Algorithms'/>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
