var WPAPI = require("wpapi");
// https://github.com/WP-API/node-wpapi
var wp = new WPAPI({ endpoint: "https://publichealthwatch.org/wp-json" });
const fs = require("fs");

const { processObjectToMarkdown } = require("./json-to-markdown");
const slugger = require("./slugger");
require("dotenv").config();

/** Sample JSON

**/

const processArticleToObject = (wpPost, tagObject) => {
	if (wpPost.status !== "publish") {
		return false;
	}
	return {
		id: wpPost.id,
		title: wpPost.title.rendered,
		link: wpPost.link,
		excerpt: wpPost.excerpt.rendered,
		date_local: wpPost.date,
		date_gmt: wpPost.date_gmt,
		date: wpPost.date_gmt,
		modified: wpPost.modified,
		modified_gmt: wpPost.modified_gmt,
		content: "\n" + wpPost.content.rendered,
		slug: wpPost.slug,
		yoast_head_rendered: wpPost.yoast_head,
		yoast_head_json: wpPost.yoast_head_json,
		byline: wpPost.yoast_head_json.author,
		originObject: wpPost,
		originTagObject: tagObject ? tagObject.tag : {},
	};
};

const retrieveSingleArticle = async (postId, folder) => {
	console.log("Retrieving JSON from Public Health Watch...");
	let postResponse = await wp.posts().id(postId).get();
	console.log("Get post", postResponse);
	return postResponse;
};

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
	const postObjects = tagObject.posts.map((post) =>
		processArticleToObject(post, tagObject)
	);
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

const retrieveArticle = async () => {
	const folder = "articles";
	const result = await retrieveSingleArticle(16524, folder);
	const objectPost = processArticleToObject(result);
	const finalResult = processObjectToMarkdown(
		"title",
		"content",
		`./src/${folder}`,
		objectPost
	);
	console.log("Wrote Episode Results", finalResult);
	return {
		results: [finalResult],
	};
};

const retrieve = async () => {
	const result = await processTaggedPosts(562, "episodes");
	const resultTwo = await processTaggedPosts(563, "articles");
	return {
		results: [result],
	};
};

module.exports = { retrieve, retrieveArticle };
