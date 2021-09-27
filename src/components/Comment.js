import React from "react";

const Comment = () => {
	return (
		<div class="antialiased mx-auto max-w-screen-md">
			<h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>
			<div class="space-y-4">
				<div class="flex">
					<div class="flex-shrink-0 mr-3">
						<img
							class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
							src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
							alt=""
						/>
					</div>
					<div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
						<strong>Sarah</strong>{" "}
						<span class="text-xs text-gray-400">3:34 PM</span>
						<p class="text-sm">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua.
						</p>
						<div class="mt-4 flex items-center">
							<div class="flex -space-x-2 mr-2">
								<img
									class="rounded-full w-6 h-6 border border-white"
									src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
									alt=""
								/>
								<img
									class="rounded-full w-6 h-6 border border-white"
									src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
									alt=""
								/>
							</div>
							<div class="text-sm text-gray-500 font-semibold">5 Replies</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
