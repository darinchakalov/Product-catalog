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
