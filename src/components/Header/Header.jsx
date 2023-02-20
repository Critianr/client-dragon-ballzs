import simbolo from '../../assets/prob.png';
import {NavLink } from "react-router-dom";
import './header.css';
const Header =() =>{
    return(
    <>
            <header>
            <div>
            <NavLink to="/"><img src={simbolo} /></NavLink>
            <div className='nav'>
            <NavLink to="/Docs" className="navlink">Docs</NavLink>
            <NavLink to="/About" className="navlink">About</NavLink>
            </div>
            </div>
            <p>API Dragon Ball Z Super</p>

        </header>
    </>
    )
}
export {Header}