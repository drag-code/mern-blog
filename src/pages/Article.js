import React from "react";
import articles from "../constants/articleContent";

const Article = ({ match }) => {
	const article = articles.find(
		(article) => article.name === match.params.name
	);
	if (!article) return <h1>Article not found</h1>;
	return (
		<div>
			<h1 className="sm:text-4xl text-2xl text-gray-800 font-bold">
				{article.title}
			</h1>
			<p className="mx-auto leading-relaxed text-base mb-4">
				{article.content}
			</p>
		</div>
	);
};

export default Article;
