require("dotenv").config();

let data = {
	username: "Fumed", // No leading @ here
	homeLabel: "Fumed Podcast",
	homeUrl: "https://fumedpodcast.com/",
	language: "en-US",
};

data.avatar = `/img/twitter-avy.jpg`;

module.exports = data;
