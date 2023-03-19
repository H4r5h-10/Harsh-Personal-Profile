import React from 'react'
import './skills.css'
import Bar from './Bar'

const Skills = () => {
  return (
    <section id='skills'>
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
          <Bar skill='NodeJs'/>
          <Bar skill='MongoDB'/>
          <Bar skill='C'/>
          <Bar skill='Algorithms'/>
        </div>
      </div>
    </section>
  )
}

export default Skills
