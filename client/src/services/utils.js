// Creating a notification div and attaching a message and CSS class depending on the type of message

export function createNotification(message, className) {
	const notificationSection = document.querySelector(".notification");

	let notificationDiv = createElelement("div", null, notificationSection, ["message-box", className]);
	let notificationSpan = createElelement("span", "close", notificationDiv, ["closebtn"]);
	let notificationP = createElelement("p", message, notificationDiv);

	notificationSpan.addEventListener("click", closeNotification);
}

function closeNotification(e) {
	let notification = this.parentElement;
	notification.style.opacity = "0";
	setTimeout(function () {
		notification.remove();
	}, 600);
}

// Function to create element, set text content, CSS class and append it to a parent element

function createElelement(type, content, parent, classNames) {
	const element = document.createElement(type);
	element.textContent = content;
	if (parent) {
		parent.appendChild(element);
	}
	if (classNames) {
		classNames.forEach((className) => {
			element.classList.add(className);
		});
	}
	return element;
}

// Gets all buttons in the nav and uppon click removes the "active" CSS class and adds that class only to the click button
export function changeActiveView() {
	let navButtons = document.querySelectorAll("nav ul li a");
	navButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			removeActiveClass(navButtons);
			e.target.classList.add("active");
		});
	});

	function removeActiveClass(elements) {
		elements.forEach((e) => {
			e.classList.remove("active");
		});
	}
}
