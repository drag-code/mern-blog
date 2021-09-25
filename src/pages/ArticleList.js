import React from "react";
import { Link } from "react-router-dom";
import articles from "../constants/articleContent";

const ArticleList = () => {
	return (
		<div>
			<h1 className="sm:text-4xl text-2xl text-gray-800 font-bold mb-4">
				Published articles
			</h1>
			<div className="container py-4">
				<div className="flex flex-wrap">
					{articles.map((article, index) => {
						return (
							<div key={index} className="pr-4 pb-4 md:w-1/2">
								<Link
									className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden block text-center text-white p-3"
									to={`article/${article.name}`}>
									<img
										className="lg:h-48 md:h-36 w-full object-cover object-center"
										alt={article.name}
										src={article.thumbnail}
									/>
									<h3 className="title-font text-lg font-medium text-gray-900 mb-3">
										{article.title}
									</h3>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ArticleList;
