import { html, render } from "../../node_modules/lit-html/lit-html.js";

export function changeView() {
	const changeViewBtn = document.querySelector(".change-view i");
	const productContainer = document.querySelector("#products-container");

	changeViewBtn.addEventListener("click", (e) => {
		let viewBtn = e.target;
		if (viewBtn.classList.contains("fa-bars")) {
			viewBtn.classList.remove("fa-bars");
			viewBtn.classList.add("fa-border-all");
			productContainer.classList.add("product-view-list");
			productContainer.classList.remove("product-view-grid");
		} else {
			viewBtn.classList.remove("fa-border-all");
			viewBtn.classList.add("fa-bars");
			productContainer.classList.remove("product-view-list");
			productContainer.classList.add("product-view-grid");
		}
	});
}

export function createNotification(message, className) {
	const notificationSection = document.querySelector(".notification");

	let notificationDiv = document.createElement("div");
	notificationDiv.classList.add("message-box");
	notificationDiv.classList.add(className);

	let notificationSpan = document.createElement("span");
	notificationSpan.classList.add("closebtn");
	notificationSpan.innerText = `close`;

	notificationSpan.addEventListener("click", closeNotification);

	let notificationP = document.createElement("p");
	notificationP.textContent = message;

	notificationDiv.appendChild(notificationSpan);
	notificationDiv.appendChild(notificationP);

	notificationSection.appendChild(notificationDiv);
}

function closeNotification(e) {
	let notification = this.parentElement;
	notification.style.opacity = "0";
	setTimeout(function () {
		notification.remove();
	}, 600);
}
