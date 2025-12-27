/**if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/service-worker.js");
}

let pageCount = sessionStorage.getItem("pageCount");
if (pageCount === null) {
	pageCount = 0;
}

if (
	(null === localStorage.getItem("xplayerRetainedSettings") ||
		pageCount === 0) &&
	window["xplayer-setup"]
) {
	window["xplayer-autoplay-switch"].checked = false;
}
 */

// Listen for every click on an IMG element
document.addEventListener("click", function (event) {
	if (window["image-container-modal"]) {
		return;
	}
	// Check if the clicked element is an IMG
	if (event.target.tagName === "IMG") {
		// Log the src attribute of the clicked image
		console.log("Image clicked:", event.target.src);
		// Construct a magnified view of the image by opening the image SRC in a modal div.
		let modal = document.createElement("div");

		modal.id = "image-container-modal";
		// Place image inside the modal
		let img = document.createElement("img");
		img.src = event.target.src;

		img.id = "modal-image";
		modal.appendChild(img);

		// Add an X to close the modal
		let closeButton = document.createElement("div");
		closeButton.innerHTML = "&times;";

		closeButton.id = "modal-close-button";
		modal.appendChild(closeButton);

		closeButton.addEventListener("click", function () {
			modal.remove();
			window.document.body.style.overflow = "auto";
		});

		// Close the modal when clicking outside the image
		modal.addEventListener("click", function (e) {
			if (e.target === modal) {
				modal.remove();
				window.document.body.style.overflow = "auto";
			}
		});
		window.document.body.style.overflow = "hidden";
		document.body.appendChild(modal);
	}
});
