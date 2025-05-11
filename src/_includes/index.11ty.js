const base = require("./base.11ty");
const xplayer = require("./partials/xplayer.11ty");
var slugify = require("slugify");
const linkmaker = require("../utils/linkmaker");
const imageCheck = require("../utils/linkmaker");
module.exports = async function (data) {
	let episodes = data.episodes;

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
		template: "index",
		content: /*html*/ `

		<div id="player-landing">
		
		</div>
		<!--<img src="/assets/favicon-512x512.png" />-->
		<div id="listen-area">
			<p>Listen on: <a href="https://podcasts.apple.com/us/podcast/fumed/id1799157335" class="external-link" target="_blank">Apple</a>, <a href="https://open.spotify.com/show/29T7H5f0WixFh8v1wPwQfZ" class="external-link" target="_blank">Spotify</a>, <a href="https://www.youtube.com/playlist?list=PL3z-aBCgSmxijTw10G4N7BkQIaDRSUaC7" class="external-link" target="_blank">YouTube</a> and anywhere you get your podcasts.</p>
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
		<br>

		<div id="map-block">
			<figure>
				<figcaption class="sora-font-light-300">
					<h3>Channelview</h3>
					Channelview, Texas, was once a quiet refuge for people trying to avoid the more industrialized areas in east Harris County. But then barges moved in, searching for places to park near the Houston Ship Channel’s petrochemical plants. 
				</figcaption>
				<img
				src="/assets/imgs/maps/large_map_final_0306.png"
				alt="Large Map that shows the location of Channelview, Texas, and the surrounding industrial zones"
				lazy />
			</figure>	
			<figure>
				<figcaption class="sora-font-light-300">
					<h3>River Bottom</h3>
					Greg Moss thought the I-10 bridge would protect his North Channelview neighborhood, known as the River Bottom, from becoming a parking lot for chemical barges. But barges — and the dredging needed to make space for them — have arrived, despite the dangers posed by a nearby Superfund Site. 
				</figcaption>
				<img
				src="/assets/imgs/maps/north_map_final_0306.png"
				alt="Greg's neighborhood."
				lazy />
			</figure>	
			<figure>
				<figcaption class="sora-font-light-300">
					<h3>South Channelview</h3>
					Since Carolyn Stone moved to South Channelview in 1988, barge companies have bought up most of the riverfront property. K-Solv, a barge-cleaning and chemical distribution company, has had two fires. A TCEQ air monitor has recorded high concentrations of benzene, a carcinogen, in the area since 2008.  
				</figcaption>
				<img
				src="/assets/imgs/maps/south_map_final_305.png"
				alt="Carolyn Stone's neighborhood."
				lazy />
			</figure>								
		</div>
		
		<hr>`,
		endOfBody: /*html*/ `
		
		<script>
			// window.episodes = ${JSON.stringify(episodes)};
			var pinPlayer = function() {
				console.log('[xpo] pinPlayer');
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
				window.xplayerObserver = observer;
			}
			htmx.on("htmx:load", function(evt) {
				
				//window["stable-container"].style.display = "block"
				xplayer.classList.remove('display-off');
				console.log('[xplay] Index HTMX Load', evt);
				if (window.xplayerObserver){
					window.xplayerObserver.disconnect();
				}
				if (location.pathname == "/") {
					console.log("[xplay] HTMX Load Index");
					console.log('[xplay] DOMContentLoaded');
					window["player-landing"].append(window["stable-container"]);
					
					pinPlayer();
				}
			})
			document.addEventListener('DOMContentLoaded', (event) => {
				//if (window.xplayerIndexSetup){ return; }

			});
		</script>
		`,
	};
	return base(data, insert);
};
// ${hasSongData ? xplayer(onPageObject) : ""}
