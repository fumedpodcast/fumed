require("dotenv").config();
const metadata = require("../_data/metadata.js");

let randomVer = () => {
	// eslint-disable-next-line no-bitwise
	const segment = () =>
		(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

	return `${segment()}-${segment()}-${segment()}`;
};

let data = {
	username: "Fumed", // No leading @ here
	title: process.env.SITE_NAME,
	description: process.env.DESCRIPTION,
	homeUrl: "https://fumedpodcast.com/",
	language: "en-US",
	metadata: {
		...metadata,
	},
	lang: "en-US",
	github: {
		build_revision: process.env.MY_GITHUB_RUN_ID || 1.0,
		build_sha: process.env.GITHUB_SHA || 1,
	},
	site_url: process.env.DOMAIN,
	domain: process.env.DOMAIN,
	defaultImage: process.env.DOMAIN + "/assets/favicon.png",
	serviceWorkerVer: `${randomVer()}-${Date.now()}`,
};

data.avatar = `/img/twitter-avy.png`;

module.exports = (info) => {
	console.log("final site info", data);
	return data;
};
