import React, { useState } from "react";
import instance from "../config/axios";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
	const [formState, setFormState] = useState({ username: "Kotlin 2", text: "" });

	const addComment = async (e) => {
		e.preventDefault();
		const { data } = await instance.post(
			`/api/articles/${articleName}/add-comment`,
			formState
		);
		setArticleInfo(data);
        setFormState({ username: "Kotlin 2", text: "" })
	};

	return (
		<form className="mb-4">
			<div className="space-y-4">
				<div className="flex">
					<div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
						<textarea
							className="text-sm w-full p-6"
							placeholder="Leave a comment here..."
							onChange={(e) => setFormState({ ...formState, text: e.target.value })}
							value={formState.text}></textarea>
						<input
							className="p-3 text-sm border rounded-lg bg-blue-700 text-white cursor-pointer"
							type="submit"
							onClick={addComment}
						/>
					</div>
				</div>
			</div>
		</form>
	);
};

export default AddCommentForm;
