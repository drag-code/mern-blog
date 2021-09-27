import React from "react";
import { Link } from "react-router-dom";
import articles from "../constants/articleContent";
import Articles from "../components/Articles";

const ArticleList = () => {
	return (
		<div>
			<h1 className="sm:text-4xl text-2xl text-gray-800 font-bold mb-4">
				Published articles
			</h1>
			<div className="container py-4">
				<div className="flex flex-wrap">
					<Articles articles={articles} />
				</div>
			</div>
		</div>
	);
};

export default ArticleList;
