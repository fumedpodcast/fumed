const metadata = require("../_data/metadata.js");
// const site = require("../_data/site.js");
const meta = require("./partials/meta.11ty");
const nav = require("./partials/nav.11ty");
const footer = require("./partials/footer.11ty");

module.exports = async function (data, zones) {
	// console.log("layout data", data);
	let episodes = data.episodes;
	let getHashTagsFromText = function (text = "") {
		let words = {};
		let splits = text.split(/(\#[A-Za-z][^\s\.\'\"\!\,\?\;\}\{]*)/g);
		for (let split of splits) {
			if (split.startsWith("#")) {
				let tag = split.substr(1).toLowerCase();
				if (!words[tag]) {
					words[tag] = 0;
				}
				words[tag]++;
			}
		}
		return words;
	};
	let meta_description = data?.description || data.site?.description || "";
	let metaChunk = meta(
		data,
		`${data.site.title}`,
		meta_description,
		data?.tags ? data.tags : [],
		data?.featuredImage
			? [`${process.env.DOMAIN}/img/${data.featuredImage}`]
			: []
	);
	let templateStyle = "";
	if (zones.template) {
		templateStyle = `<link rel="stylesheet" href="/assets/css/template-${zones.template}.css">`;
	}
	// console.log("canonical", zones.canonical);
	let canonical = zones?.canonical
		? zones.canonical
		: `${process.env.DOMAIN}${data.page.url}`;

	return /*html*/ `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1">
		<title>${data.title || data.site.title}</title>
		<meta name="description" content="${meta_description}" />

		<link rel="preconnect" href="https://episodes.castos.com/" />
		<link rel="dns-prefetch" href="https://episodes.castos.com/" hx-preserve="true">
		<link rel="dns-prefetch" href="https://www.youtube.com" hx-preserve="true">
		<link rel="preconnect" href="https://open.spotify.com" hx-preserve="true">
		<link rel="dns-prefetch" href="https://open.spotify.com" hx-preserve="true">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin hx-preserve="true">
		<link rel="preconnect" href="https://publichealthwatch.org/" crossorigin hx-preserve="true">
		${metaChunk}
		<script hx-preserve="true">
		if("classList" in document.documentElement) {
			document.documentElement.classList.add("has-js");
		}
		window.pageData = {};
		console.log('setup window.onSpotifyIframeApiReady')
		window.onSpotifyIframeApiReady = (IFrameAPI) => {
			window.SpotifyIFrameAPI = IFrameAPI
		};
		</script>
		${zones.earlyHead || ""}
		<link rel="stylesheet" href="/assets/css/style.css"  hx-preserve="true">
		<script src="/assets/js/htmx.min.js" type="application/javascript" hx-preserve="true"></script>
		<script src="https://www.youtube.com/iframe_api" async onload="(function(){ window.YTReady = true; var event = new Event('ytapi-ready'); document.dispatchEvent(event);})()" hx-preserve="true"></script>
		<script src="https://open.spotify.com/embed/iframe-api/v1" async onload="(function(){
			var event = new Event('spotify-api-ready'); 
			document.dispatchEvent(event);
		})()" hx-preserve="true"></script>
		<script src="/assets/js/script.js" defer type="application/javascript" hx-preserve="true"></script>
		<script src="/assets/js/head-support.js" defer type="application/javascript" hx-preserve="true"></script>
		<script src="/assets/js/script.js" defer type="application/javascript" hx-preserve="true"></script>
		<script src="/service-worker.js" defer type="application/javascript" hx-preserve="true"></script>
		<script src="https://unpkg.com/scrollama" async type="application/javascript" hx-preserve="true"></script>
		<link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" hx-preserve="true" rel="stylesheet">
		<!-- Favicon Meta -->
		<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
		<link  hx-preserve="true" rel="manifest" href="/site.webmanifest">
		<meta name="msapplication-TileColor" content="#1f1836">
		<meta name="theme-color" content="#1f1836">

		<link rel="canonical" href="${canonical}" />
		<link rel="preconnect" href="https://fonts.googleapis.com"  hx-preserve="true">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap"  hx-preserve="true" rel="stylesheet">
		<link  hx-preserve="true" rel="alternate" type="application/rss+xml" 
		title="RSS Feed for ${process.env.DOMAIN}" 
		href="https://feeds.castos.com/px68k" />
		${templateStyle}
		${zones.lateHead || ""}
  		<!-- Google tag (gtag.js) -->
		<script  hx-preserve="true" async src="https://www.googletagmanager.com/gtag/js?id=G-TPKS9NM4W1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		
		  gtag('config', 'G-TPKS9NM4W1');
		</script>
	</head>
	<body hx-ext="morph head-support" >
		<div id="inner-body">
			${nav(data)}
			<div id="main-content" hx-history-elt>
				<header id="main-header-canvas">
					<div id="main-header-inner">
						<div id="main-header-canvas-underlay">
							<video autoplay="true" playsinline="true" muted loop id="background-video" poster="/assets/template-imgs/backgroundsmoke.png" preload="auto"
							>
								<source src="/assets/template-imgs/background_emissions_loop.mp4" type="video/mp4">
							</video>
						</div>
						<div id="hed-container"><div id="hed">
							<div class="col">
								<h1 class="title">${data.title.trim()}</h1>
							</div>
							<div class="col">
							</div>
						</div>
						</div>
					</div>
				</header>
				<main class="wrapper template-${zones.template}">
					<div class="overlap-top logos">
						<div class="logo-container"><a target="_blank" href="https://publichealthwatch.org"><img src="/assets/template-imgs/PHW_white_transparent_watermark_PHW.png"></a></div>
						<div></div><div></div><div></div>
						<div class="logo-container"><a target="_blank" href="https://www.tpr.org/"><img  src="/assets/template-imgs/TPR_Logo_RGB.png"></a></div>
					</div>
					<br>
					${zones.content}
					
				</main>
			</div>
			
		</div>
		<aside id="stable-container" hx-preserve>
			<div id="media-container">
				<script>console.log("stable-container", document.location.href)</script>
				<div class="stretch-footer"></div>
				<x-player id="xplayer"></x-player>
			</div>

		</aside>
		<script src="/assets/js/xplayer.js" defer type="application/javascript" hx-preserve="true"></script>
		<script>
			window.episodes = ${JSON.stringify(episodes)};
			htmx.on("htmx:load", function(evt) {
				if (!window.xplayer.classList.contains("xp-index")){
					// window["stable-container"].style.display = "none"
					if (location.pathname !== "/") {
						xplayer.classList.add('display-off');
					}
					console.log("[xplay] HTMX Load xp-index setup");
					window.xplayer.classList.remove("min");
					document.body.classList.remove("xp-min");
					window.xplayer.setPlayerState("xp-index");
					document.body.classList.add("xp-index");
					window.xplayer.classList.add("xp-index");

					let activation = () => {
						if (window.xplayer.classList.contains("index-activated")){
							console.log("[xplay] index-activated indicates the player is already set up");

							clearTimeout(window.YTactivationTimeout);
							return;
						}
						window.xplayer.classList.add("index-activated")
						console.log('[xplay] activation');
						clearTimeout(window.YTactivationTimeout);
						// Move episodes into the right position
						// TKTK
						// Activate the player
						window.episodes.forEach((episode) => { 
							xplayer.handlePushedPlayingChange(episode);
						});
						// xplayer.handlePushedPlayingChange(window.episodes[1])
						xplayer.makeMediaAdvance(window.episodes[0].id, false)
						console.log('heard "ytapi-ready" event');

						// Activate the player
						//xplayer.handlePushedPlayingChange(window.episodes[0])
						//xplayer.setAttribute('xp-playertype', 'native');
						//xplayer.handlePushedPlayingChange(window.episodes[1])
						//xplayer.handlePushedPlayingChange(window.episodes[2])
						//xplayer.handlePushedPlayingChange(window.episodes[3])
						// xplayer.handlePushedPlayingChange(window.episodes[1])
						//xplayer.makeMediaAdvance(window.episodes[0].id, false)
						//console.log('heard "ytapi-ready" event');
						
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
					if (location.pathname !== "/") {
						console.log("[xplay] add docked to stable-container");
						window["stable-container"].classList.add('docked');
					} else {
						console.log("[xplay] do not add docked to stable-container");
					}
					activation();
				}
			});
		</script>
		<script type="application/javascript" hx-preserve="true">
				if (!window.xplayerNavigationChecks) {
					console.log("xplayerNavigationChecks")
					const stableContainer = document.querySelector('#stable-container');
					const playerLanding = document.querySelector('#player-landing');
					const swapHandler = function(){
						
						if (!stableContainer.classList.contains('docked')) {
							stableContainer.classList.add('docked');
							document.body.append(window["stable-container"]);
							if (!window.xplayer.getMediaState()) {
								xplayer.classList.add('display-off');
								// window["stable-container"].style.display = "none"
							}
						}
					}
					htmx.on("htmx:beforeSwap", function(evt) {
						console.log("HTMX beforeSwap")
						swapHandler();
					});
					htmx.on("htmx:historyRestore", function(evt) {
						console.log("HTMX historyRestore")
						// swapHandler();
						//debugger;
					})
					addEventListener("popstate", (event) => {
						console.log("HTMX popstate")
						swapHandler();
					});
					htmx.on("htmx:beforeSend", function(evt) {
						console.log("HTMX beforeSend")
					})
					htmx.on("htmx:beforeHistorySave", function(evt) {
						console.log("HTMX beforeHistorySave")
					})
					htmx.on("htmx:beforeTransition", function(evt) {
						console.log("HTMX beforeTransition")
					})					
					
					htmx.on("htmx:loadStart", function(evt) {
						console.log("HTMX loadStart")
					})
					htmx.on("htmx:load", function(evt) {
						console.log("HTMX Load")
						
						if (location.pathname == "/" && stableContainer.classList.contains('docked')) {
							console.log("HTMX Load return player to position")
							stableContainer.classList.remove('docked');
							window["player-landing"].append(window["stable-container"]);
							xplayer.classList.remove('display-off');
							// window["stable-container"].style.display = "block"
						}
					});

					window.xplayerNavigationChecks = true;
				}
		</script>
		${zones.endOfBody || ""}
	</body>
</html>`;
};
