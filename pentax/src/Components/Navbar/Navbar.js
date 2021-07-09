import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"
// import {BiSearchAlt} from 'react-icons/bi'
import logo from "../Photo/pentax.png"

function Navbar() {
	return (
		<div className= "header">
			<img src={logo}/>
			<ul className="ul">
			<li> <NavLink to="/">Home</NavLink></li>/
			<li> <NavLink to="/about">About</NavLink></li>/
			<li> <NavLink to="/project">Project</NavLink></li>/
			<li> <NavLink to="/contact">Contact</NavLink></li>/
			

			{/* <li className='lupa'><NavLink to="/"><BiSearchAlt/></NavLink></li> */}

			</ul>
	
		</div>
	)
}

export default Navbar
