const base = require("./base.11ty");
const xplayer = require("./partials/xplayer.11ty");
var slugify = require("slugify");
const linkmaker = require("../utils/linkmaker");
const imageCheck = require("../utils/linkmaker");
module.exports = async function (data) {
	let insert = {
		template: "index",
		content: /*html*/ `
		<div class="overlap-top logos">
			<div class="logo-container"><a target="_blank" href="https://publichealthwatch.org"><img src="/assets/template-imgs/PHW_white_transparent_watermark_PHW.png"></a></div>
			<div></div><div></div><div></div>
			<div class="logo-container"><a target="_blank" href="https://www.tpr.org/"><img  src="/assets/template-imgs/TPR_Logo_RGB.png"></a></div>
		</div>		
		<div id="about">
			<div class="body-content">
				${data.content}
			</div>

		</div>
		<hr />
		<script>
			window.pageData = {};
		</script>
		`,
	};
	return base(data, insert);
};
