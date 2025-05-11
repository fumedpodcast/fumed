const base = require("./base.11ty");
var slugify = require("slugify");
const linkmaker = require("../utils/linkmaker");
module.exports = async function (data) {
	function generateXPlayerActivationScript(episode) {
		let slug = slugify(episode.title, { lower: true });
		return /*html*/ `
			<button class="xplayer-activation listen-button" onclick="xplayerPlayAndDisplay('${episode.id}')">
				<span class="text">Listen</span> <span class="play-icon">▶</span>
			</button>
		`;
	}

	// Generate a date string like "April 2, 2025" from the date string in the episode data
	function dateStringMaker(dateString) {
		let date = new Date(dateString);
		let options = { year: "numeric", month: "long", day: "numeric" };
		return date.toLocaleDateString("en-US", options);
	}
	/* Grab the episodes.js data from the 11ty global data object and generate a function that shows all the episodes on this single page as a set of entries. Each entry should show the date, a title, description, and listen button. */
	function generateEpisodeListHTML(episodes) {
		let html = "";
		for (let episode of episodes) {
			let slug = slugify(episode.title, { lower: true });
			html += /*html*/ `
			<div class="episode-list-item">
				<div class="episode-list-item__inner">
					
						<div class="episode-list-item__content">
							<p class="episode-list-item__date">${dateStringMaker(episode.media.date)}</p>
							<h3>${episode.title}</h3>
							<p>${episode.media.description}</p>
							
							<!-- listen button -->
							<div class="episode-list-item-button">
								${generateXPlayerActivationScript(episode)}
							</div>
						</div>
						
				</div>
			</div>`;
		}
		return html;
	}

	let insert = {
		template: "episodes",
		content: /*html*/ `	
		<div id="episodes">
			<!-- layout modified from https://kutkutx.studio/category/the-disconnect-power-politics-and-the-texas-blackout -->
			<div id="episode-list">
				${generateEpisodeListHTML(data.episodes)}
			</div>
			<div class="body-content">
				${data.content}
			</div>

		</div>
		<hr />
		<script>
			window.xplayerPlayAndDisplay = function (episode) {
				// window["stable-container"].style.display = "block"
				xplayer.classList.remove('display-off');
				xplayer.makeMediaAdvance(episode);
			}
		</script>
		`,
	};
	return base(data, insert);
};
