import React from "react";
import articles from "../constants/articleContent";
import Articles from "../components/Articles";
import NotFound from "./error/404";

const Article = ({ match }) => {
	const article = articles.find(
		(article) => article.name === match.params.name
	);
	if (!article) return <NotFound />;
	const articlesLeft = articles.filter(
		(article) => article.name !== match.params.name
	);
	return (
		<div>
			<h1 className="sm:text-4xl text-2xl text-gray-800 font-bold">
				{article.title}
			</h1>
			<p className="mx-auto leading-relaxed text-base mb-4">
				{article.content}
			</p>
			<h1 className="sm:text-2x text-xl font-bold text-gray-900 mt-4 mb-4">
				Other articles
			</h1>
			<div className="flex flex-wrap -m-4">
				<Articles articles={articlesLeft} />
			</div>
		</div>
	);
};

export default Article;
