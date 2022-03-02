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
