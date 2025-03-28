const base = require("./base.11ty");
const xplayer = require("./partials/xplayer.11ty");
var slugify = require("slugify");
const linkmaker = require("../utils/linkmaker");
const imageCheck = require("../utils/linkmaker");
module.exports = async function (data) {
	let insert = {
		template: "index",
		content: /*html*/ `	
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
