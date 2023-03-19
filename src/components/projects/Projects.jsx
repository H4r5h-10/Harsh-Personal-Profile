import React from 'react'
import Cards from './Cards'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My</h5>
      <h2>Projects</h2>
      <div className="card-container">
        <Cards url="https://picsum.photos/id/237/200/300"/>
        <Cards url="https://picsum.photos/id/237/200/300"/>
        <Cards url="https://picsum.photos/id/237/200/300"/>
      </div>
    </section>
  )
}

export default Projects
