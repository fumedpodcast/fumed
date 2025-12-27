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

	/* Grab the articles from the pagination data */
	function generateArticlesHTML(articles) {
		let html = "";
		if (!articles || articles.length === 0) {
			return "<p>No articles found.</p>";
		}

		for (let article of articles) {
			// Make sure article data exists and has the expected structure
			if (article && article.data) {
				let slug = slugify(article.data.title || "Untitled", {
					lower: true,
				});
				let imgHTML = "";
				console.log(
					"article data for image check",
					article.data.yoast_head_json
				);
				if (
					article.data.yoast_head_json &&
					article.data.yoast_head_json?.og_image.length &&
					article.data.yoast_head_json.og_image[0].url
				) {
					console.log(
						"article image data",
						article.data.yoast_head_json.og_image[0]
					);
					imgHTML = /*html*/ `<div class="article-list-item__image">
								<img src="${article.data.yoast_head_json.og_image[0].url}"
							</div>`;
				}
				//console.log("article", article);
				//debugger;
				html += /*html*/ `
				<div class="article-list-item">

					<div class="article-list-item__inner">
						<div class="article-list-item__content">
							<p class="article-list-item__date">${
								article.date
									? dateStringMaker(article.date)
									: "No date"
							}</p>
							<h3><a href="${article.data.link}" target="_blank">${
					article.data.title || "Untitled"
				}</a></h3>
							${imgHTML}
							<div class="article-list-item__excerpt">
								${article.data.excerpt || "No article body available."}
							</div>
						</div>
					</div>
				</div>
				<hr />`;
			}
		}
		return html;
	}

	/**let canonicalRePass =
		data.pagination.items[0]?.data?.originObject?.yoast_head_json
			?.canonical || false;
	console.log("canonical final pass", canonicalRePass);**/
	let insert = {
		template: "articles",
		// canonical: canonicalRePass,
		content: /*html*/ `	
		<div id="articles">
			<div id="article-list">
				${generateArticlesHTML(data.pagination ? data.pagination.items : [])}
			</div>
			<div class="body-content">
				${data.content}
			</div>
		</div>
		<hr />
		`,
	};
	return base(data, insert);
};
