import React from 'react'
import './skills.css'
import {motion} from 'framer-motion'
const Bar = (props) => {
  return (
      <li className='list'>
        <h3>{props.skill==='C'?"C++":props.skill}</h3>
        <span className="bar"
              
        >
          <motion.span className={props.skill}
          initial={{opacity: 0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration: 1}}
          viewport={{once:true}}
          ></motion.span>
        </span>
      </li>
  )
}

export default Bar
