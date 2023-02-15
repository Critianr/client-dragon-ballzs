import simbolo from '../../assets/prob.png';

import {NavLink } from "react-router-dom";
const Header =() =>{
    return(
    <>
            <header>
            <div>
            <a><img src={simbolo} /></a>
            <div>
            <NavLink to="/Docs" className="navlink">Docs</NavLink>
            <a>Supports us</a>
            </div>
            </div>
            <p>API Dragon Ball Z Super</p>

        </header>
    </>
    )
}
export {Header}