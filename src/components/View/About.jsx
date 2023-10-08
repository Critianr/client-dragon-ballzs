import {NavLink } from "react-router-dom";
import {Header} from '../../components/Header/Header';
import './About.css';
const About =() =>{
    return(
    <>
    <div className="about">
    
    <Header />
    <div className="envabout">
    <h1>About</h1>
    <h2>What is this?</h2>
    <p>
    Dragon Ball Z Super API is a REST based on the television show Dragon Ball Z Super. You will have access characters and images. Dragon Ball Z Super API is filled with canonical information as seen on the TV show. Check out the documentation to get started
    </p>
    <NavLink className="about-links" to="/Docs">Check out the documentation to get started</NavLink>
    <h2>Who are you?</h2>
    <p>
    I'm Cristian Rodriguez, a guy who likes to develop things and an unconditional fan of dragon ball z
    </p>
    <h2>Why did you build this?</h2>
    <p>
    Because you is really interested in the idea of writing an open source project is also because Dragon Ball Z Super is my favorite show at that moment, so why not?
    </p>
    <h2>Technical stuff?</h2>
    <p>
    The entire project is hosted on Digital Ocean. use Node to serve the API, soon the character database will be in MySql (because if), interface in React
    </p>
    <h2>How can I contribute to the project?</h2>
    <p>
    You can 
    <NavLink className="about-links" to="/Support"> help us to keep the project alive </NavLink> 
    and you can also contribute on, there are things to be done
    <a href="#"> 
        GitHub.
    </a>
    </p>
    <h2>Copyright?</h2>
    <p>
    Dragon Ball Z Super is a Japanese manga series written by Akira Toriyama and illustrated by Toyotarou. The data and images are used without claim of ownership and belong to their respective owners.
    </p>
    <p>This API is open source and uses a BSD license.
    </p>
    <footer>
            <p>Copyright 2023</p>
            <span></span>
            <p>If you want to collaborate in extending the functionality of the API 
            <span> contact us</span>cramire122@gmail.com
            </p>
        </footer>
    </div>
    </div>
    </>
    )
}
export {About}