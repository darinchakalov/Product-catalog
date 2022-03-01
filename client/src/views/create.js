import { html, render } from "../../node_modules/lit-html/lit-html.js";
import productServices from "../services/productServices.js";

const rootElement = document.querySelector(".root");

const createTemplate = (onSubmit) => html`<div class="form-container">
	<h2>Create new product</h2>
	<form @submit=${onSubmit}>
		<input type="text" name="name" placeholder="Product name" />
		<input type="number" name="price" placeholder="Price" />
		<input type="text" name="currency" placeholder="Currency ('Eg USD')" />
		<button class="button" type="submit">Create</button>
	</form>
</div>`;

export function createPage() {
	async function onSubmit(event) {
		event.preventDefault();
		let productData = Object.fromEntries(new FormData(event.target));
		if (!productData.name || !productData.price || !productData.currency) {
			return alert("All fields are mandatory");
		}
		await productServices.createProduct(productData);
	}
	render(createTemplate(onSubmit), rootElement);
}
