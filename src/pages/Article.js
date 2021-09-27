import React, {useEffect, useState} from "react";
import articles from "../constants/articleContent";
import Articles from "../components/Articles";
import NotFound from "./error/404";
import Comment from "../components/Comment";
import instance from "../config/axios";

const Article = ({ match }) => {
	const articleName = match.params.name;
	const [loading, setLoading] = useState(true);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchComments();
	}, [articleName]);


	const fetchComments = async() => {
		console.log(instance.defaults);
		const {data} = await instance.get(`api/articles/${articleName}/comments`)
		setComments(data.comments);
		setLoading(false);
	}

	const article = articles.find(
		(article) => article.name === articleName
	);
	if (!article) return <NotFound />;
	const articlesLeft = articles.filter(
		(article) => article.name !== articleName
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
			<div>
				{
					!loading ?
					comments.map(comment => (<Comment />)) :
					null
				}
			</div>
		</div>
	);
};

export default Article;
