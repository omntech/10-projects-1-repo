import React from "react";
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05} from './imports';
import './blog.css';

const Blog = () => {
	return (
		<div className="omntech__blog section__padding" id="blog">
			<div className="omntech__blog-heading">
				<h1 className="gradient__text">A lot is happening, 
We are blogging about it.</h1>
			</div>
			<div className="omntech__blog-container">
				<div className="omntech__blog-container-groupA">
					<Article imgURL={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
				</div>
				<div className="omntech__blog-container-groupB">
					<Article imgURL={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> 
					<Article imgURL={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
					<Article imgURL={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
					<Article imgURL={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
				</div>
			</div>
		</div>
	)
}

export default Blog 