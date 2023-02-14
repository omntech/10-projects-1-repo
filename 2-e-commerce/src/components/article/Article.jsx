import React from 'react';
import './article.css';

const Article = ( {imgURL, date, title} ) => {
	return (
		<div className='omntech__blog-container_article'>
			<div className='omntech__blog-container_article-image'>
				<img src={imgURL} alt="blog" />
			</div>
			<div className='omntech__blog-container_article-content'>
				<p>{date}</p>
				<h3>{title}</h3>
			</div>
			<p>Read Full Article</p>
		</div>
	)
}

export default Article 