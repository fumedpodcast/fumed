const metadata = require("../_data/metadata.js");
// const site = require("../_data/site.js");
const meta = require("./partials/meta.11ty");
const nav = require("./partials/nav.11ty");
const footer = require("./partials/footer.11ty");

module.exports = async function (data, zones) {
	// console.log("layout data", data);
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
	return /*html*/ `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1">
		<title>${data.title || data.site.title}</title>
		<meta name="description" content="${meta_description}" />
		<link rel="preconnect" href="https://www.youtube.com" hx-preserve="true">
		<link rel="dns-prefetch" href="https://www.youtube.com" hx-preserve="true">
		<link rel="preconnect" href="https://open.spotify.com" hx-preserve="true">
		<link rel="dns-prefetch" href="https://open.spotify.com" hx-preserve="true">
		<link rel="preload" href="/assets/css/template-tags.css" as="style" hx-preserve="true">
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
		<script src="https://www.youtube.com/iframe_api" async onload="(function(){var event = new Event('ytapi-ready'); document.dispatchEvent(event);})()" hx-preserve="true"></script>
		<script src="https://open.spotify.com/embed/iframe-api/v1" async onload="(function(){
			var event = new Event('spotify-api-ready'); 
			document.dispatchEvent(event);
		})()" hx-preserve="true"></script>
		<script src="/assets/js/script.js" defer type="application/javascript" hx-preserve="true"></script>
		<script src="/assets/js/head-support.js" defer type="application/javascript" hx-preserve="true"></script>
		<script src="/assets/js/script.js" defer type="application/javascript" hx-preserve="true"></script>
		<script src="/service-worker.js" defer type="application/javascript" hx-preserve="true"></script>
		<script src="https://unpkg.com/scrollama" type="application/javascript" hx-preserve="true"></script>

		<!-- Favicon Meta -->
		<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
		<link rel="manifest" href="/site.webmanifest">
		<meta name="msapplication-TileColor" content="#1f1836">
		<meta name="theme-color" content="#1f1836">

		<link rel="canonical" href="${process.env.DOMAIN}${data.page.url}" />
		<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
		<link rel="alternate" type="application/rss+xml" 
		title="RSS Feed for ${process.env.DOMAIN}" 
		href="https://feeds.castos.com/px68k" />
		${templateStyle}
		${zones.lateHead || ""}
	</head>
	<body hx-ext="morph head-support" >
		<div id="inner-body">
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
				<main class="wrapper" class="template-${zones.template}">
					${zones.content}
					
				</main>
			</div>
			
		</div>
		<!--<aside id="stable-container" hx-preserve>
			<div id="media-container">
				<script>console.log(document.location.href)</script>
				<div class="stretch-footer"></div>
				<x-player id="xplayer"></x-player>
			</div>
		</aside>
		<script src="/assets/js/xplayer.js" defer type="application/javascript" hx-preserve="true"></script>-->
	</body>
</html>`;
};
