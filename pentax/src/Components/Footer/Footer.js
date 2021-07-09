import React from 'react'
import "./Footer.css"
import footerlogo from "../Photo/pentax.png"
import {NavLink} from 'react-router-dom'
import {SiFacebook} from  'react-icons/si'
import {AiFillTwitterCircle} from  'react-icons/ai'
import {TiSocialInstagram} from  'react-icons/ti'
import {ImYoutube2} from  'react-icons/im'

function Footer() {
	return (
		<div className="footer">

            <img src={footerlogo}/>
			<div className="footer1">
				<ul>
					<li>Login</li>
					<li>VISIT PENTAXIMAGING.COM</li>
				</ul>
			</div>

			<div className="footer2">
				<h4>

				Bizi İzləməyə Davam
				</h4>
				<ul className="footer-icon">

				<li className='facebook'><NavLink to="/"><SiFacebook/></NavLink></li>
				<li className='twitter'><NavLink to="/"><AiFillTwitterCircle/></NavLink></li>
				<li className='instagram'><NavLink to="/"><TiSocialInstagram/></NavLink></li>
				<li className='youtube'><NavLink to="/"><ImYoutube2/></NavLink></li>
					
				</ul>



			</div>
			
		</div>
	)
}

export default Footer
