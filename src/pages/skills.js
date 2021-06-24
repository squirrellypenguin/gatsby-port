import React from "react"
import Layout from "../layout/Layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Blog() {


  return (
  <div> 
    <Layout>
          <div id="new">
    <h2>Fullstack Development</h2>
      <div className="container">
    <div className="skill-block1">
   
    <p>Adequately understanding a problem is the first step in finding a solution. Technology provides tools which have solved problems previously.</p>



    </div>
    <div className="skill-block2">
    <div className="skill-icon-block" >   
    <div id="nested">
    <FontAwesomeIcon icon={['fab', 'html5']} />
    <FontAwesomeIcon icon={['fab','css3']} />
    <FontAwesomeIcon icon={['fab','node-js']} />
    <FontAwesomeIcon icon={['fab','react']} />
    <FontAwesomeIcon icon={['fab','vuejs']} />
    <FontAwesomeIcon icon={['fab','sass']} />
    <FontAwesomeIcon icon={['fab','js']} />
    <FontAwesomeIcon icon={['fa', 'gem']} />
    <FontAwesomeIcon icon={['fab','php']} />
    <FontAwesomeIcon icon={['fab','python']} />
    <FontAwesomeIcon icon={['fab','linux']} />
    </div>

    </div>
    </div>
    <div className="skill-block3">
        
        <p>
        Having a comprehensive view of both the front and back end  provides a robust toolkit to draw from when iterating through an issue. Let's work on a orblem
        </p>
        </div>
  </div>
  </div>

    </Layout>
    </div>
  )
}