require("dotenv").config();
let siteDataFunc = require("./site.js");
let siteData = siteDataFunc();
console.log("site data in episodes.js", siteData);
let data = [
	{
		title: "Episode 4: Locked and Loaded",
		me: "Public Health Watch",
		id: "2001633",
		media: {
			spotify:
				"https://open.spotify.com/episode/34cEsqQLrVYMIii7LUm6on?si=b314d54f9eba4b3e",
			description:
				"Greg’s house is burned down and his video camera shows the face of the suspected arsonist — a man he doesn’t know. Greg thinks the barge company he’s been monitoring is behind the fire, but he has no proof. Greg carries a gun wherever he goes, and Carolyn and her husband make sure their guns are always nearby. Neither she nor Greg can afford to move away from the dangers that surround them — so for now, they’ll keep fighting to preserve what remains of the community they love.",
			tags: ["True Crime", "Society & Culture", "Science"],
			date: "Fri, 28 Mar 2025 10:00:00 +0000",
			title: "Locked and Loaded",
			songtitle: "Locked and Loaded",
			artists: ["Public Health Watch"],
			youtube: "https://youtu.be/UtjJHe-z7HQ",
			soundcloud: false,
			audiofile:
				"https://episodes.castos.com/67be50e3a92ae3-98602971/2001633/c1e-835jgfo76rziprkzj-xxwdpz5xix7z-vqjjnk.mp3",
			lastfm: false,
			album: "Fumed",
			playlists: "Fumed: Season 1",
			featuredImage: "/assets/favicon-512x512.png",
			castos: "hhttps://permalink.castos.com/podcast/64137/episode/2001633",
			youtubeId: "UtjJHe-z7HQ",
			pretitle: "Episode 4",
			preferredAPI: "native",
		},
	},
	{
		title: "Episode 3: Battle Cry",
		me: "Public Health Watch",
		id: "1997035",
		media: {
			spotify:
				"https://open.spotify.com/episode/19xtzeFdNJnryY4YgUYPvh?si=e540e854c811449c",
			description:
				"Greg is rescued from his home when Hurricane Harvey hits Channelview. The floodwaters gash a temporary cap that covers the Superfund site, unleashing chemicals into the river. Carolyn and Greg join forces to create the Channelview Health and Improvement Coalition. Greg campaigns publicly — and successfully — against a barge company’s plan to dig up tons of river sludge to make way for more barges.",
			tags: ["True Crime", "Society & Culture", "Science"],
			date: "Fri, 21 Mar 2025 10:00:00 +0000",
			title: "Battle Cry",
			songtitle: "Battle Cry",
			artists: ["Public Health Watch"],
			youtube: "https://youtu.be/PRttP9OaiWQ",
			soundcloud: false,
			audiofile:
				"https://episodes.castos.com/67be50e3a92ae3-98602971/1997035/c1e-835jgfo7pr6uprkzj-34n1g0nrs6rq-c5ohbe.mp3",
			lastfm: false,
			album: "Fumed",
			playlists: "Fumed: Season 1",
			featuredImage: "/assets/favicon-512x512.png",
			castos: "https://permalink.castos.com/podcast/64137/episode/1997035",
			youtubeId: "PRttP9OaiWQ",
			pretitle: "Episode 3",
			preferredAPI: "native",
		},
	},
	{
		title: "Episode 2: Birth of the Activists",
		me: "Public Health Watch",
		id: "1992308",
		media: {
			spotify:
				"https://open.spotify.com/episode/4ZKtMt27BtGQUOsIE6hawu?si=e9b336d58eb6443e",
			description:
				"Carolyn’s neighborhood becomes ground zero for Channeview’s rapid industrialization. A fire engulfs a nearby chemical storage facility, and a barge company builds its headquarters across the street from her house. Greg uses drones to keep tabs on the chemical barges that are moving into his neighborhood, close to a Superfund site filled with cancer-causing dioxin.",
			tags: ["True Crime", "Society & Culture", "Science"],
			date: "Fri, 14 Mar 2025 11:00:00 +0000",
			title: "Birth of the Activists",
			songtitle: "Birth of the Activists",
			artists: ["Public Health Watch"],
			youtube: "https://youtu.be/QDt5kRlGVUM",
			soundcloud: false,
			audiofile:
				"https://episodes.castos.com/67be50e3a92ae3-98602971/1992308/c1e-mpm6oiqw099b3g67n-mkxdj1dnf6o8-zvu7ox.mp3",
			lastfm: false,
			album: "Fumed",
			playlists: "Fumed: Season 1",
			featuredImage: "/assets/favicon-512x512.png",
			castos: "https://permalink.castos.com/podcast/64137/episode/1992308",
			youtubeId: "QDt5kRlGVUM",
			pretitle: "Episode 2",
			preferredAPI: "native",
		},
	},
	{
		title: "Episode 1: River on Fire",
		me: "Public Health Watch",
		id: "1987617",
		media: {
			spotify:
				"https://open.spotify.com/episode/1FXuorFLPbmIatmA7dtt5C?si=b38528e92f834be3",
			description:
				"It’s the 1980s. Carolyn Stone and Greg Moss have settled into quiet lives in Channelview — an unincorporated community outside Houston, in the heart of the nation’s petrochemical industry. But within a few years, petrochemical plants and chemical barges move in, and air pollution and industrial accidents become routine. When they realize that state lawmakers and regulators aren’t going to protect them, Carolyn and Greg start fighting back themselves.",
			tags: ["True Crime", "Society & Culture", "Science"],
			date: "Fri, 07 Mar 2025 11:00:00 +0000",
			title: "River on Fire",
			songtitle: "River on Fire",
			artists: ["Public Health Watch"],
			youtube: "https://youtu.be/JFVKhVePwVY",
			soundcloud: false,
			audiofile:
				"https://episodes.castos.com/67be50e3a92ae3-98602971/1987617/c1e-zqx0whmq6odid164j-1p43ozjmfn0r-w2epqo.mp3",
			lastfm: false,
			album: "Fumed",
			playlists: "Fumed: Season 1",
			featuredImage: "/assets/favicon-512x512.png",
			castos: "https://permalink.castos.com/podcast/64137/episode/1987617",
			youtubeId: "JFVKhVePwVY",
			pretitle: "Episode 1",
			preferredAPI: "native",
		},
	},
	{
		title: "Introducing 'Fumed,' a New Podcast From Public Health Watch",
		me: "Public Health Watch",
		id: "1983338",
		media: {
			spotify:
				"https://open.spotify.com/episode/1FXuorFLPbmIatmA7dtt5C?si=4fd29d91c0d94fc3",
			description:
				"Fumed is an investigative podcast about two stubborn Texans trying to salvage what's left of their working-class community. That’s a problem, though, because they live in East Harris County, where the petrochemical industry calls the shots — and where pushing back can be dangerous. A four-part series from Public Health Watch.",
			tags: ["True Crime", "Society & Culture", "Science"],
			date: "Thu, 27 Feb 2025 23:17:00 +0000",
			title: "Introducing 'Fumed,' a New Podcast From Public Health Watch",
			songtitle:
				"Introducing 'Fumed,' a New Podcast From Public Health Watch",
			artists: ["Public Health Watch"],
			youtube: "https://youtu.be/6T-nDJbMdWY",
			soundcloud: false,
			audiofile:
				"https://episodes.castos.com/67be50e3a92ae3-98602971/1983338/c1e-wqd3jhrnxvdu58wno-9jn99pzoi58k-rch0e0.mp3",
			lastfm: false,
			album: "Fumed",
			playlists: "Fumed: Season 1",
			featuredImage: "/assets/favicon-512x512.png",
			castos: "https://permalink.castos.com/podcast/64137/episode/1983338",
			youtubeId: "6T-nDJbMdWY",
			pretitle: "",
			preferredAPI: "native",
		},
	},
];

if (siteData.playOrder === "ascending") {
	console.log("reversing episode order for ascending playOrder");
	data = data.slice().reverse();
}

module.exports = data;
