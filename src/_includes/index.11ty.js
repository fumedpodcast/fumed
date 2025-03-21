const base = require("./base.11ty");
const xplayer = require("./partials/xplayer.11ty");
var slugify = require("slugify");
const linkmaker = require("../utils/linkmaker");
const imageCheck = require("../utils/linkmaker");
module.exports = async function (data) {
	let episodes = [
		{
			title: "Birth of the Activists",
			me: "Public Health Watch",
			id: "1992308",
			media: {
				spotify:
					"https://open.spotify.com/episode/4ZKtMt27BtGQUOsIE6hawu?si=e9b336d58eb6443e",
				description:
					"Carolyn’s neighborhood becomes ground zero for Channeview’s rapid industrialization. A fire engulfs a nearby chemical storage facility, and a barge company builds its headquarters across the street from her house. Greg uses drones to keep tabs on the chemical barges that are moving into his neighborhood, close to a Superfund site filled with cancer-causing dioxin. To see pictures of Carolyn and Greg and learn more about Channelview, go to fumedpodcast.com.   CREDITS Host: David Leffler Editor: Susan White Executive Producer: Jordan Gass-Pooré Senior Producer: Salina Arredondo Assistant Producer: Savanna Strott Reporting: David Leffler, Savanna Strott and Salina Arredondo Additional Research: Jana Cholakovska and Jordan Gass-Pooré Sound Engineer: Mark Bush Original Music: Michael Ramos  Jim Morris is the executive director and editor in chief of Public Health Watch",
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
			title: "River on Fire",
			me: "Public Health Watch",
			id: "1987617",
			media: {
				spotify:
					"https://open.spotify.com/episode/1FXuorFLPbmIatmA7dtt5C?si=b38528e92f834be3",
				description:
					"It’s the 1980s. Carolyn Stone and Greg Moss have settled into quiet lives in Channelview — an unincorporated community outside Houston, in the heart of the nation’s petrochemical industry. But within a few years, petrochemical plants and chemical barges move in, and air pollution and industrial accidents become routine. When they realize that state lawmakers and regulators aren’t going to protect them, Carolyn and Greg start fighting back themselves. To see pictures of Carolyn and Greg and learn more about Channelview, go to fumedpodcast.com.   CREDITS Host: David Leffler Editor: Susan White Executive Producer: Jordan Gass-Pooré Senior Producer: Salina Arredondo Assistant Producer: Savanna Strott Reporting: David Leffler, Savanna Strott and Salina Arredondo Additional Research: Jana Cholakovska and Jordan Gass-Pooré Sound Engineer: Mark Bush Original Music: Michael Ramos  Jim Morris is the executive director and editor in chief of Public Health Watch",
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
					"Fumed is an investigative podcast about two stubborn Texans trying to salvage what's left of their working-class community. That’s a problem, though, because they live in East Harris County, where the petrochemical industry calls the shots — and where pushing back can be dangerous. A four-part series from Public Health Watch. To see pictures of Carolyn and Greg and learn more about Channelview, go to fumedpodcast.com.   CREDITS Host: David Leffler Editor: Susan White Executive Producer: Jordan Gass-Pooré Senior Producer: Salina Arredondo Assistant Producer: Savanna Strott Reporting: David Leffler, Savanna Strott and Salina Arredondo Additional Research: Jana Cholakovska and Jordan Gass-Pooré Sound Engineer: Mark Bush Original Music: Michael Ramos  Jim Morris is the executive director and editor in chief of Public Health Watch",
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

	let albumImage = await imageCheck(data);
	let imageAlt =
		data.featuredImageAlt ||
		`Cover of album that contains ${data.songtitle}`;
	var onPageObject = {
		site: data.site,
		metadata: data.metadata,
		me: data.me,
		media: {
			description: data.description,
			tags: data.tags,
			date: data.date,
			title: data.title,
			songtitle: data.songtitle,
			artists: data.artists,
			youtube: data.youtube,
			spotify: data.spotify,
			spotifyUri: data.spotifyUri,
			soundcloud: data.soundcloud,
			audiofile: data.audiofile
				? `/assets/media/${data.audiofile}`
				: false,
			lastfm: data.lastfm,
			album: data.album,
			playlists: data.playlists,
			featuredImage: albumImage,
			podbean: data.podbean,
			youtubeId: "",
		},
	};
	var hasSongData = false;

	if (data?.spotify && !data.spotifyUri) {
		// https://community.spotify.com/t5/Desktop-Windows/URI-Codes/td-p/4479486
		let spotifyUri = data.spotify.split("track/")[1];
		onPageObject.media.spotifyUri = `spotify:track:${spotifyUri}`;
	}

	let linksSet = "";
	if (data.youtube) {
		linksSet += `<a href="${data.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a> | `;
	}
	if (data.spotify) {
		linksSet += `<a href="${data.spotify}" target="_blank" rel="noopener noreferrer">Spotify</a> | `;
	}
	if (data.lastfm) {
		linksSet += `<a href="${data.lastfm}" target="_blank" rel="noopener noreferrer">Last.fm</a> | `;
	}
	// console.log("date", data.date.toString());
	if (data.youtube) {
		let finalString = data.youtube.replaceAll(
			"www.youtube.com/watch?v=",
			"www.youtube-nocookie.com/embed/"
		);
		finalString = finalString.replaceAll(
			"youtu.be/",
			//"www.youtube-nocookie.com/watch?v="
			"www.youtube-nocookie.com/embed/"
		);
		let videoId = finalString.split("embed/")[1];
		let finalVideoId = videoId.split("?")[0];
		// console.log("videoId", finalVideoId);
		onPageObject.media.youtubeId = finalVideoId;
	}
	["spotifyUri", "youtubeId", "audiofile"].forEach((key) => {
		if (onPageObject.media[key]) {
			hasSongData = true;
		}
	});

	// console.log("layout data", data);
	let meta_description = data?.description || data.site?.description || "";
	let insert = {
		content: /*html*/ `
		<div id="top-logo"><a target="_blank" href="https://publichealthwatch.org"><img src="/assets/template-imgs/PHW_white_transparent_watermark_PHW.png"></a></div>
		<br>
		<div id="player-landing">
		
		</div>
		<!--<img src="/assets/favicon-512x512.png" />-->
		<div id="listen-area">
			<p>Listen on: <a href="https://podcasts.apple.com/us/podcast/fumed/id1799157335" class="external-link" target="_blank">Apple</a>, <a href="https://open.spotify.com/show/29T7H5f0WixFh8v1wPwQfZ" class="external-link" target="_blank">Spotify</a>, <a href="https://www.youtube.com/playlist?list=PL3z-aBCgSmxijTw10G4N7BkQIaDRSUaC7" class="external-link" target="_blank">YouTube</a> and anywhere you get your podcasts.</p>
		</div>
		<p class="center-justify">Featured On:</p>
		<div class="logos">
			<div><a target="_blank" href="https://www.tpr.org/"><img  src="/assets/template-imgs/TPR_Logo_RGB.png"></a></div>
			<div><a target="_blank" href="https://www.npr.org/podcasts/1267542067/fumed"><img src="/assets/template-imgs/NPR_Logo_Color_CMYK.jpg"></a></div>
		</div>
		<br /><br />
		<div class="flex-double">
			<div class="flex-double-col">
				<div class="flex-col-inner">
					<h2>AN INVESTIGATIVE PODCAST
					FROM PUBLIC HEALTH WATCH</h2>
					<div><p>Fumed is about the people who live in the shadows of America’s chemical plants and oil refineries.</p></div>
				</div>
			</div>
			<div class="flex-double-col">
				<img src="/assets/imgs/boats-thru-fence.JPG">
			</div>
		</div>
		<div class="spaced-graf"><p>This season, two stubborn Texans try to salvage what’s left of their working-class community. That’s a problem, though, because they live in East Harris County, where the petrochemical industry calls the shots — and where pushing back can be dangerous.</p></div>
		<div class="flex-double desktop-align-start">
			<div class="flex-double-col center-justify">
				<div class="flex-col-inner">
					<h2>CHANNELVIEW, TX</h2>
					<h3> <img class="h3-glyph" src="/assets/template-imgs/map_pin_tan.svg"> 15 MINUTES EAST OF HOUSTON</h3>
					<p class="center-justify">Set in Channelview, Texas, in the heart of the nation's petrochemical industry, Fumed follows Carolyn Stone and Greg Moss as they risk everything to fight for their community’s future.</p>
				</div>
			</div>
			<div class="flex-double-col">
				<img src="/assets/imgs/drone-view.jpg">
			</div>
		</div>
		<div class="flex-triple">
			<div class="flex-triple-col">
				<img src="/assets/imgs/carolyn.jpg">
			</div>
			<div class="flex-triple-col">
				<div class="flex-col-inner">
					<h2>NOT YOUR TYPICAL ENVIRONMENTAL ACTIVISTS</h2>
					<p>Carolyn Stone and Greg Moss definitely aren’t your typical environmental activists. Both have personal ties to the petrochemical industry. Both own guns. Neither trusts the government.</p>
				</div>
			</div>
			<div class="flex-triple-col">
				<img src="/assets/imgs/greg.jpg">
			</div>
	  	</div>

		<script>
			window.episodes = ${JSON.stringify(episodes)};
			document.addEventListener('DOMContentLoaded', (event) => {
				window["player-landing"].append(window["stable-container"]);
				window.xplayer.classList.remove("min");
				document.body.classList.remove("xp-min");
				window.xplayer.setPlayerState("xp-index");
				document.body.classList.add("xp-index");
				window.xplayer.classList.add("xp-index");

				let activation = () => {

					clearTimeout(window.YTactivationTimeout);
					// Move episodes into the right position
					// TKTK

					// Activate the player
					xplayer.handlePushedPlayingChange(window.episodes[0])
					//xplayer.setAttribute('xp-playertype', 'native');
					xplayer.handlePushedPlayingChange(window.episodes[1])
					xplayer.handlePushedPlayingChange(window.episodes[2])
					// xplayer.handlePushedPlayingChange(window.episodes[1])
					xplayer.makeMediaAdvance(window.episodes[0].id, false)
					console.log('heard "ytapi-ready" event');
					
				}				
				window.YTactivationTimeout = setTimeout(() => {
						console.log("[xplay] yt timeout activation");
						activation();
				}, 15000);
				window.onYouTubeIframeAPIReady = () => {
					console.log('[xplay] ytapi activation');
					//activation();
				};
				document.addEventListener("ytapi-ready", () => {
					console.log('[xplay] script loaded trigger');
					// activation();
				});
				activation();

				var pinPlayer = function() {
					const stableContainer = document.querySelector('#stable-container');
					const playerLanding = document.querySelector('#player-landing');

					if (!playerLanding) return;

					const observer = new IntersectionObserver(
						(entries) => {
							entries.forEach(entry => {
								if (entry.isIntersecting) {
									window.enteredViewport = false;
									console.log('[xpo] Container is back', entry, entry.target, 'first child', window["player-landing"].firstElementChild);
									window.enteredViewport = true;
									if (window["player-landing"].firstElementChild == null || window["player-landing"].firstElementChild.id != "stable-container"){
										console.log('[xpo] player-landing is without stable-container', entry, entry.target);
										stableContainer.classList.remove('docked');
										window["player-landing"].append(window["stable-container"]);
									}
								} else if (entry.isVisible) {
									console.log('[xpo] Container entered viewport', entry);
									window.enteredViewport = true;
								} else if (window.enteredViewport && entry.intersectionRect.top === 0) {
									console.log('[xpo] Container is out of view from having been in view', entry, entry.target, 'intersection', entry.intersectionRect);
									window.enteredViewport = false;
									// Add any actions you want to take when container hits top
									stableContainer.classList.add('docked');
									document.body.append(window["stable-container"]);
								} else {
									console.log('[xpo] Container entered viewport', 'is visible', entry.isVisible, 'is intersecting', entry.isIntersecting, 'entry', entry);
								}
							});
						},
						{
							rootMargin: '0px 0px 0px 0px',
							threshold: [1]
						}
					);

					observer.observe(playerLanding);
				}
				pinPlayer();
			});
		</script>
		<br>

		
		<hr>`,
	};
	return base(data, insert);
};
// ${hasSongData ? xplayer(onPageObject) : ""}
