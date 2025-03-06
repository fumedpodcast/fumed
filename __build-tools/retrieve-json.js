var WPAPI = require("wpapi");
// https://github.com/WP-API/node-wpapi
var wp = new WPAPI({ endpoint: "https://publichealthwatch.org/wp-json" });
const fs = require("fs");

const { processObjectToMarkdown } = require("./json-to-markdown");
const slugger = require("./slugger");
require("dotenv").config();

/** Sample JSON

**/

const retrieveTaggedPosts = async (tagId) => {
	console.log("Retrieving JSON from Public Health Watch...");
	let tagResponse = await wp.tags().id(tagId).get();
	const tagResponseObject = await tagResponse;
	console.log("Get information about the tag", tagResponseObject);
	const options = {
		method: "GET",
		headers: { "User-Agent": "insomnia/10.3.0" },
	};

	let fetchResponse = new Promise((resolve, reject) => {
		fetch(
			`https://publichealthwatch.org/wp-json/wp/v2/posts?tags=${tagId}`,
			options
		)
			.then((response) => response.json())
			.then((response) => resolve(response))
			.catch((err) => console.error(err));
	});
	const posts = await fetchResponse;
	console.log(
		"Get posts with the tag",
		posts,
		posts[0].yoast_head_json.author
	);
	return { tag: tagResponseObject, posts };
};

const processTaggedPosts = async (tagId, folder) => {
	console.log("Processing Tagged Posts with ID", tagId);
	const tagObject = await retrieveTaggedPosts(tagId);
	const postObjects = tagObject.posts.map((post) => {
		if (post.status !== "publish") {
			return false;
		}
		return {
			id: post.id,
			title: post.title.rendered,
			link: post.link,
			excerpt: post.excerpt.rendered,
			date_local: post.date,
			date_gmt: post.date_gmt,
			date: post.date_gmt,
			modified: post.modified,
			modified_gmt: post.modified_gmt,
			content: "\n" + post.content.rendered,
			slug: post.slug,
			yoast_head_rendered: post.yoast_head,
			yoast_head_json: post.yoast_head_json,
			byline: post.yoast_head_json.author,
			originObject: post,
			originTagObject: tagObject.tag,
		};
	});
	const writeResults = postObjects.map((postObject) => {
		// @TODO write 11tydata.json files instead of markdown
		return processObjectToMarkdown(
			"title",
			"content",
			`./src/${folder}`,
			postObject
		);
	});
	console.log("Write Episode Results", writeResults);
	return postObjects;
};

const retrieve = async () => {
	const result = await processTaggedPosts(562, "episodes");
	const resultTwo = await processTaggedPosts(563, "articles");
	return {
		results: [result],
	};
};

module.exports = { retrieve };
