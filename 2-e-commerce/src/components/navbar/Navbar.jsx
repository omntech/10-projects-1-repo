//import React from 'react';
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM -> block element modifier 

const Menu = () => (
	<>
		<p><a href="#home">Home</a></p>
		<p><a href="#wgpt3">What is GPT3 </a></p>
		<p><a href="#possibility">Open AI</a></p>
		<p><a href="#features">Case Studies</a></p>
		<p><a href="#blog">Library</a></p>
	</>
)

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className='omntech__navbar'>
			<div className="omntech__navbar-links">
				<div className="omntech__navbar-links_logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="omntech__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="omntech__navbar-sign">
					<p>Sign in</p>
					<button type="button">Sign up</button>
			</div>
			<div className="omntech__navbar-menu">
				{ toggleMenu
					? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/> 
					: <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
				}
				{ toggleMenu && (
					<div className="omntech__navbar-menu_container scale-up-center">
						<div className="omntech__navbar-menu_container-links">
							<Menu />
							<div className="omntech__navbar-menu_container-links-sign">
								<p>Sign in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
/* 
	* if toggleMenu is currenlty open we shld close it when clicked toggleMenu FALSE
	* else riMenuLIne not open we shld open it TRUE
*/
export default Navbar