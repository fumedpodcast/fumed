const base = require("./base.11ty");
const xplayer = require("./partials/xplayer.11ty");
var slugify = require("slugify");
const linkmaker = require("../utils/linkmaker");
const imageCheck = require("../utils/imageCheck");
module.exports = async function (data) {
	let headshots = [
		{
			image: "/assets/imgs/headshots/Headshot_Leffler_BW_crop.png",
			bio: "David Leffler is a staff writer and investigative journalist at Public Health Watch who covers toxic chemical pollution in Texas. ",
			name: "David Leffler<br><small>Host</small>",
			alt: "Host: David Leffler",
		},
		{
			image: "/assets/imgs/headshots/Headshot_White_BW_crop.png",
			bio: "Susan White has edited Pulitzer Prize-winning projects at InsideClimate News, ProPublica and the San Diego Union-Tribune. She has also edited two podcasts: Room 20 for the LA Times Studios and Border City for the Union-Tribune.",
			name: "Susan White<br><small>Editor</small>",
			alt: "Editor: Susan White",
		},
		{
			image: "/assets/imgs/headshots/Headshot_Gass_Poore__BW_crop.png",
			bio: "Jordan Gass-Pooré is an award-winning climate journalist and podcaster. She’s the creator and host of the podcasts “Hazard NJ” and “Hazard NYC,” which examine serious pollution issues. ",
			name: "Jordan Gass-Pooré<br><small>Executive Producer</small>",
			alt: "Executive Producer: Jordan Gass-Pooré",
		},
		{
			image: "/assets/imgs/headshots/Headshot_Arredondo_BW_crop.png",
			bio: "Salina Arredondo is a Washington-based podcast producer and investigative journalist with in-depth knowledge about petrochemical barge regulation.",
			name: "Salina Arredondo<br><small>Senior Producer</small>",
			alt: "Senior Producer: Salina Arredondo",
		},
		{
			image: "/assets/imgs/headshots/Headshot_Strott_BW_crop.png",
			bio: "Savanna Strott is a staff writer and investigative journalist at Public Health Watch who specializes in data analysis and government accountability.",
			name: "Savanna Strott<br><small>Assistant Producer</small>",
			alt: "Assistant Producer: Savanna Strott",
		},
		{
			image: "/assets/imgs/headshots/Headshot_Cholakovska_BW_crop.png",
			bio: "Jana Cholakovska is an investigative reporter covering the environment, climate, and public health.",
			name: "Jana Cholakovska<br><small>Researcher</small>",
			alt: "Researcher: Jana Cholakovska",
		},
		{
			image: "/assets/imgs/headshots/Headshot_Jim_Morris_BW_crop.png",
			bio: "Jim Morris is the founder of Public Health Watch and has been a journalist since 1978, focusing on public health and the environment.",
			name: "Jim Morris<br><small>Editor-in-Chief</small>",
			alt: "Editor-in-Chief: Jim Morris",
		},
		{
			image: "/assets/imgs/headshots/Mark_BushHeadshot.png",
			bio: "Mark Bush is a professional audio engineer, sound designer, musician, and composer with a diverse background in audio production and music performance.",
			name: "Mark Bush<br><small>Sound Engineer</small>",
			alt: "Sound Engineer: Mark Bush",
		},
		{
			image: "/assets/imgs/headshots/Michael_RamosHeadshot.png",
			bio: "Michael Ramos is a Grammy-winning musician, producer, and composer.",
			name: "Michael Ramos<br><small>Original Music</small>",
			alt: "Original Music: Michael Ramos",
		},
	];
	let headshotImages = function () {
		let headshotBlock = "";
		headshots.forEach((headshot) => {
			if (headshot.image) {
				headshot.image = headshot.image; //imageCheck(headshot.image, "small");
				// generate divs that show the headshot images and each are put in a CSS grid div
				headshotBlock += /*html*/ `
<div class="headshot">
	<img class="headshot-image" src="${headshot.image}" alt="${headshot.alt}" />
	<div class="name-pane">
		<div class="name">
			<h3>${headshot.name}</h3>
		</div>
		<div class="bio-plus">
			<div class="team__member-button" onclick="activatePopup()">
				<div class="team__member-icon w-embed">
					<svg width="100%" height="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17 0L17 34M34 17H0" stroke="currentcolor" stroke-width="2"></path>
					</svg>
				</div>
			</div>
		</div>
	</div>
	<div class="headshot-info">
		<div class="popup-inner">
			<div class="popup-container">
				<div class="popup-button">
					<div class="popup__button-icon w-embed">
						<svg width="100%" height="100%" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.0201 0.979004L12.9993 12.9998M12.9993 12.9998L0.978517 25.0206M12.9993 12.9998L25.0201 25.0206M12.9993 12.9998L0.978516 0.979004" stroke="currentcolor" stroke-width="2"></path>
						</svg>
					</div>
				</div>
				<div class="popup-header">
					<img class="popup-headshot-image" src="${headshot.image}" alt="${headshot.alt}" />
					<div class="popup-name">
						<h3>${headshot.name}</h3>
					</div>
				</div>
				<p class="bio">${headshot.bio}</p>								
			</div>
		</div>
	</div>
</div>

				`;
			}
		});
		return headshotBlock;
	};
	let insert = {
		template: "about",
		content: /*html*/ `	
		<div id="about">
			<!-- layout modified from https://www.unionthefilm.com/?mc_cid=b65ba21708&mc_eid=68d00999ee#watch -->
			<div id="headshot-grid">
				${headshotImages()}
			</div>
			<div class="body-content">
				${data.content}
			</div>

		</div>
		<hr />
		<script>
			window.pageData = {};
				function activatePopup(e){
					console.log("popup", e);
				}
			Array.from(document.getElementsByClassName("team__member-button")).forEach((button) => {
				
				button.addEventListener("click", function(e) {
					console.log("popup open", e.target);
					e.target.closest(".headshot").querySelector(".headshot-info").classList.add("popup");
				});
			});
			Array.from(document.getElementsByClassName("popup__button-icon")).forEach((button) => {
				button.addEventListener("click", function(e) {
					console.log("popup close", e);
					e.target.closest(".headshot").querySelector(".headshot-info").classList.remove("popup");
				});
			});
			Array.from(document.getElementsByClassName("headshot-info")).forEach((background) => {
				background.addEventListener("click", function(e) {
					console.log("popup close by background", e);
					e.target.closest(".headshot").querySelector(".headshot-info").classList.remove("popup");
				});
			});			
		</script>
		`,
	};
	return base(data, insert);
};
