/* 
	! ways of importing files into react
	* import Article from './components/article/Article'
	* import Brand from './components/brand/Brand'
	* import CTA from './components/cta/CTA'
	* import Feature from './components/feature/Feature'
	* import Navbar from './components/navbar/Navbar'
! another way to do it: 
import { Article, Brand, CTA, Feature, Navbar} from './components';

*/

import React from 'react';
import { Footer, Blog, Possibility, Features, Omntech, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './index.css'

/* ! to move into element ctrl+element */

const App = () => {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
			</div>
			<Brand />
			<Omntech />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	)
}

export default App