const base = require("./base.11ty");
module.exports = async function (data) {
	// console.log("layout data", data);
	let meta_description = data?.description || data.site?.description || "";
	let insert = {
		content: /*html*/ `
		<br>
		<!--<img src="/assets/favicon-512x512.png" />-->
		<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/29T7H5f0WixFh8v1wPwQfZ?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
		<div id="listen-area">
			<p>Listen on: <a href="https://podcasts.apple.com/us/podcast/fumed/id1799157335" class="external-link" target="_blank">Apple</a>, <a href="https://open.spotify.com/show/29T7H5f0WixFh8v1wPwQfZ" class="external-link" target="_blank">Spotify</a>, <a href="https://www.youtube.com/watch?v=P9wfPomEd_E" class="external-link" target="_blank">YouTube</a></p>
		</div>

		<h2>AN INVESTIGATIVE PODCAST
		FROM PUBLIC HEALTH WATCH</h2>
		<div><p>Fumed is about the people who live in the shadows of America’s chemical plants and oil refineries.</p></div>

		<p>This season, two stubborn Texans try to salvage what’s left of their working-class community. That’s a problem, though, because they live in East Harris County, where the petrochemical industry calls the shots — and where pushing back can be dangerous.</p>

		<section id="scrolly">
			<figure id="scrolly-figure">
				<div></div>
			</figure>
		<article>
		  <div class="step" data-step="1">
			<h2>CHANNELVIEW, TX</h2>
			<h3> <img class="h3-glyph" src="/assets/template-imgs/map_pin_tan.svg"> 15 MINUTES EAST OF HOUSTON</h3>
			
		  </div>
		  <div class="step" data-step="2">
		  	<p>Set in Channelview, Texas, in the heart of the nation's petrochemical industry, Fumed follows Carolyn Stone and Greg Moss as they risk everything to fight for their community’s future.</p>
		  </div>
		  <div class="step" data-step="3">
			<h2>NOT YOUR TYPICAL ENVIRONMENTAL ACTIVISTS</h2>
			<p>Carolyn Stone and Greg Moss definitely aren’t your typical environmental activists. Both have personal ties to the petrochemical industry. Both own guns. Neither trusts the government.</p>
		  </div>
		</article>
	  </section>

<!--
		<section>
			
			<img src="/assets/imgs/boats-thru-fence.JPG">
			
			
			<img src="/assets/imgs/drone-view.jpg">
			<img src="/assets/imgs/carolyn.jpg">
			
			<img src="/assets/imgs/greg.jpg">
		</section>-->
		<br>

	<script src="https://unpkg.com/d3@5.9.1/dist/d3.min.js"></script>
	<script src="/assets/goscroll.js"></script>	
		<hr>`,
	};
	return base(data, insert);
};
