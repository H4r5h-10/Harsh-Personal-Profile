import React from 'react'
import Cards from './Cards'
import './projects.css'
import image1 from '../../assets/Screenshot 2023-05-28 033426.png'
import image2 from '../../assets/Screenshot 2023-05-29 215500.png'
import {motion} from 'framer-motion'
const Projects = () => {
  return (
    <motion.section id='projects'
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.5, delay: 0.2}}
      viewport={{once:true}}
    >
      <h5>My</h5>
      <h2>Projects</h2>
      <div className="card-container">
        <Cards url={image1} desc="A website to add your favourite movies to your watchlist." github="https://github.com/H4r5h-10/moviemeter" link="https://h4r5h-10.github.io/moviemeter/"/>
        <Cards url={image2} desc="A CRUD app to increase your productivity by adding tasks to your list." github="https://github.com/H4r5h-10/moviemeter" link="https://H4r5h-10.github.io/todo-list"/>
        {/* <Cards url="https://picsum.photos/id/237/200/300" desc="lorem12"/> */}
      </div>
    </motion.section>
  )
}

export default Projects
