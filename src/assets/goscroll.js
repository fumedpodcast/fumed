// using d3 for convenience
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var figure = scrolly.select("figure");
var article = scrolly.select("article");
var step = article.selectAll(".step");
var figureEl = document.querySelector("#scrolly-figure");
var figureElInner = document.querySelector("#scrolly-figure div");

var imgSet = [
	"/assets/imgs/boats-thru-fence.JPG",
	"/assets/imgs/drone-view.jpg",
	"/assets/imgs/carolyn.jpg",
	"/assets/imgs/greg.jpg",
];

imgSet.forEach((imgUrl) => {
	var linkEl = document.createElement("link");
	linkEl.rel = "preload";
	linkEl.as = "image";
	linkEl.href = imgUrl;
	document.head.append(linkEl);
});

figureElInner.innerHTML = `<img src="${imgSet[0]}" />`;

// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
	// 1. update height of step elements
	var stepH = Math.floor(window.innerHeight * 0.75);
	step.style("height", stepH + "px");

	var figureHeight = window.innerHeight / 2;
	var figureMarginTop = (window.innerHeight - figureHeight) / 2;

	figure
		.style("height", figureHeight + "px")
		.style("top", figureMarginTop + "px");

	// 3. tell scrollama to update new element dimensions
	scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
	console.log(response);
	var { element, direction, index } = response;

	// add color to current step only
	step.classed("is-active", function (d, i) {
		return i === response.index;
	});

	// update graphic based on step
	console.log("Scroll Handle: ", element, figure, figureElInner);
	figureElInner.innerHTML = `<img src="${imgSet[response.index + 1]}" />`;
}

function handleSectionEnter(response) {
	console.log(response);
	var { element, direction, index } = response;

	// add color to current step only
	step.classed("is-active", function (d, i) {
		return i === response.index;
	});

	// update graphic based on step
	console.log("Scroll Handle Section: ", element, direction, index);
	console.log("Check window size", window.innerWidth < 562);
	if (index == 1 && direction == "down" && window.innerWidth >= 562) {
		document.querySelector("#menu").classList.add("active");
	} else {
		document.querySelector("#menu").classList.remove("active");
	}
}

function init() {
	// 1. force a resize on load to ensure proper dimensions are sent to scrollama
	handleResize();

	// 2. setup the scroller passing options
	// 		this will also initialize trigger observations
	// 3. bind scrollama event handlers (this can be chained like below)
	scroller
		.setup({
			step: "#scrolly article .step",
			offset: 0.33,
			debug: false,
		})
		.onStepEnter(handleStepEnter);
	var scrollerTwo = scrollama();
	scrollerTwo
		.setup({
			step: "div.container .active-section",
			offset: 0,
			debug: false,
		})
		.onStepEnter(handleSectionEnter);
}

// kick things off
init();
