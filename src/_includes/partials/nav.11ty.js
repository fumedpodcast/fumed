const linkmaker = require("../../utils/linkmaker");

module.exports = function (data) {
	return /*html*/ `
<script>
	function opennav(e){
		window["top-nav"].classList.toggle('open');
	}
	window.addEventListener("scroll", () => {
		window["top-nav"].classList.remove('open');
	});
</script>

<nav id="top-nav">
	<div id="nav-icon" onclick="opennav(this)">
		<img src="/assets/menu-icon.svg" width="25px" height="25px" alt="menu icon">
	</div>
	<div id="nav-menu-items">
		<ul>
			<li>
				${linkmaker(data, "/about/", "About")}
			</li>
			<li>
				${linkmaker(data, "/listen/", "Listen")}
			</li>
			<li>
				<h2>
					${linkmaker(data, "", data.site.title, "site-name")}
				</h2>
			</li>
			<li>
				${linkmaker(data, "/read/", "Read")}
			</li>			
			<li>
				<a href="https://publichealthwatch.org/donate/" target="_blank">Donate</a>
			</li>
		</ul>
	</div>
</nav>
`;
};
