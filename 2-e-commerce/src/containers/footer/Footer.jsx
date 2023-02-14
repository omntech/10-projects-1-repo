import React from "react";
import './footer.css';
import gpt3logo from '../../assets/logo.svg'

const Footer = () => {
	return (
		<div className="omntech__footer section__padding" >
			<div className="omntech__footer-heading">
				<h1 className="gradient__text">Do you want to step in to the future before others</h1>
			</div>
			<div className="omntech__footer-btn">
				<p>Request Early Access</p>
			</div>

			<div className="omntech__footer-links">
				<div className="omntech__footer-links_logo">
					<img src={gpt3logo} alt="logo" />
					<p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
				</div>
				<div className="omntech__footer-links_div">
					<h4>Links</h4>
					<p>Overons</p>
					<p>Social Media</p>
					<p>Counters</p>
					<p>Contact</p>
				</div>
				<div className="omntech__footer-links_div">
					<h4>Company</h4>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className="omntech__footer-links_div">
					<h4>Get in touch</h4>
					<p><a target="_blank" href="https://github.com/omntech" style={{borderRadius:'50%', padding:3, color: '#000', fontWeight: 'bold', backgroundColor:'orange', cursor:'pointer'}}>omntech</a></p>
					<p>930132-89</p>
					<p>info@payme.net</p>
				</div>
			</div>
			<div className="omntech__footer-copyright">
				<p>© 2022 GPT-3. All rights reserved. Namangan, Uzbekistan</p>
			</div>
		</div>
	)
}

export default Footer 