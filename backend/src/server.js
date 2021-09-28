const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const client = new MongoClient("mongodb+srv://admin:4DM1N123@cluster0.ckk25.mongodb.net/blog?retryWrites=true&w=majority");
const app = express();

app.use(express.json());
app.use(cors())

const dbOperation = async (operation, res) => {
	try {
		await client.connect();
		const db = client.db("blog");
		await operation(db);
		await client.close();
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error while connecting to the database", error });
	}
};

app.get("/api/articles/:name", (req, res) => {
	dbOperation(async (db) => {
		const articleName = req.params.name;
		const article = await db
			.collection("articles")
			.findOne({ name: articleName });
		if (!article) res.status(404).json({ message: "Not found" });
		res.status(200).json(article);
	}, res);
});

app.post("/api/articles/:article/add-comment", (req, res) => {
	dbOperation(async (db) => {
		const { username, text } = req.body;
		const articleName = req.params.article;
		const article = await db.collection("articles").findOne({name: articleName});
		await db.collection("articles").updateOne({name: articleName}, {
			$set: {
				comments: [...article.comments, {username, text}]
			}
		});
		const updatedArticle = await db.collection("articles").findOne({name: articleName});
		res.status(200).json(updatedArticle);
	}, res);
});

app.get("/api/articles/:article/comments", (req, res) => {
	dbOperation(async (db) => {
		const articleName = req.params.article;
		const article = await db.collection("articles").findOne({name: articleName});
		res.status(200).json(article);
	}, res);
});

app.listen(8000, () => {
	console.log("listening on");
});
