const linkmaker = require("../../utils/linkmaker");

module.exports = function (data) {
	return /*html*/ `
<script>
	function opennav(e){
		console.log(e.parentNode.parentNode); e.parentNode.parentNode.classList.toggle('open');
	}
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
				<h2>
					${linkmaker(data, "", data.site.title, "site-name")}
				</h2>
			</li>
			<li>
				<a href="https://publichealthwatch.org/donate/" target="_blank">Donate</a>
			</li>
		</ul>
	</div>
</nav>
`;
};
