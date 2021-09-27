import React, { useEffect, useState } from "react";
import articles from "../constants/articleContent";
import Articles from "../components/Articles";
import NotFound from "./error/404";
import Comment from "../components/Comment";
import AddCommentForm from "../components/AddCommentForm";
import instance from "../config/axios";

const Article = ({ match }) => {
	const articleName = match.params.name;
	const article = articles.find((article) => article.name === articleName);
	const [loading, setLoading] = useState(true);
	const [articleInfo, setArticleInfo] = useState({comments: []})

	useEffect(() => {
		const fetchComments = async () => {
			const { data } = await instance.get(`api/articles/${articleName}`);
			setArticleInfo(data);
			setLoading(false);
		};
		fetchComments();
	}, [articleName]);
	
	if (!article) return <NotFound />
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
			<div class="antialiased mx-auto max-w-screen-md mt-4">
				<h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
				<AddCommentForm articleName={articleName} setArticleInfo={setArticleInfo}/>
				{!loading
					? articleInfo.comments.map((comment) => <Comment comment={comment} />)
					: null}
			</div>
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
