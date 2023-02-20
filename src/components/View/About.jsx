import {NavLink } from "react-router-dom";
import {Header} from '../../components/Header/Header';
import './About.css';
const About =() =>{
    return(
    <>
    <div className="about">
    <Header />
    <h1>About</h1>
    <h2>What is this?</h2>
    <p>
    Dragon Ball Z Super API is a REST based on the television show Dragon Ball Z Super. You will have access characters and images. Dragon Ball Z Super API is filled with canonical information as seen on the TV show. Check out the documentation to get started
    </p>
    <NavLink to="/Docs">Check out the documentation to get started</NavLink>
    <h2>Who are you?</h2>
    <p>
    I'm Cristian Rodriguez, a guy who likes to develop things and an unconditional fan of dragon ball z
    </p>
    <h2>Why did you build this?</h2>
    <p>
    Because we were really interested in the idea of writing an open source project and also because Dragon Ball Z Super is our favorite show at that moment, so why not?
    </p>
    <h2>Technical stuff?</h2>
    <p>
    The entire project is hosted on Linode and vercel. use Node to serve the API.
    </p>
    <h2>How can I contribute to the project?</h2>
    <p>
    You can <NavLink to="/Support">help us to keep the project alive</NavLink> and you can also contribute on <a href="https://railway.app/project/77d0accb-584c-4768-a259-85982e86058e/service/441dd066-7a3e-4ec6-9190-d6416f649584">GitHub.</a>
    </p>
    <h2>Copyright?</h2>
    <p>
    Dragon Ball Z Super is a Japanese manga series written by Akira Toriyama and illustrated by Toyotarou. The data and images are used without claim of ownership and belong to their respective owners.
    </p>
    <p>This API is open source and uses a BSD license.
    </p>
    </div>
    </>
    )
}
export {About}