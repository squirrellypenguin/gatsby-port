import React from "react"
import {RedH1} from "../styles/mainstyles"
import {Link} from "gatsby"
import "../style.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faGem  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCheckSquare, faGem) 




const Layout = props => {
  return (
    <>
      <header>
        
        <nav>
          <Link to="/"><img alt="foo" style={{height: 24}} src="https://res.cloudinary.com/duvzhauq9/image/upload/v1624123936/peihijwllpfsrvl958nx.png" /></Link>
          <Link to="/skills">Skills</Link>        
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Resources</Link>
      
          </nav>
      </header>
      
      <main>
   
        {props.children}
      
        </main>
      
      <footer className="footer" id="footer">
        <h1 className="color-primary-0 ">Left</h1>
        <div class="branding">
        <FontAwesomeIcon icon={['fab','github']} />
        <FontAwesomeIcon icon={['fab','linkedin']} />
      </div>
      </footer>
    </>
  )
}

export default Layout
