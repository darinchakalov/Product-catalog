import { html, render } from "../../node_modules/lit-html/lit-html.js";
import productServices from "../services/productServices.js";
import page from "../../node_modules/page/page.mjs";
import { createNotification } from "../services/utils.js";

const rootElement = document.querySelector(".root");

const editTemplate = (onSubmit, product) => html`<div class="form-container">
	<h2>Edit product</h2>
	<form @submit=${onSubmit}>
		<label for="name">Product name</label>
		<input type="text" name="name" placeholder="Product name" value=${product.name} />
		<label for="price">Price</label>
		<input type="number" name="price" placeholder="Price" value=${product.price} />
		<label for="currency">Currency</label>
		<input type="text" name="currency" placeholder="Currency ('Eg USD')" value=${product.currency} />
		<button class="button" type="submit">Edit</button>
	</form>
</div>`;

export async function renderEditPage(context) {
	try {
		let currentProduct = await productServices.getSingleProduct(context.params.id);
		render(editTemplate(onSubmit, currentProduct), rootElement);
	} catch (error) {
		createNotification(error, "alert");
	}

	async function onSubmit(event) {
		event.preventDefault();
		let productData = Object.fromEntries(new FormData(event.target));
		if (!productData.name || !productData.price || !productData.currency) {
			return createNotification("All fields are mandatory", "info");
		}
		try {
			await productServices.editProduct(context.params.id, productData);
			createNotification("Product succesfully edited", "success");
			page.redirect("/");
		} catch (error) {
			createNotification(error, "alert");
		}
	}
}
