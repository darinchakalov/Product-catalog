import { html, render } from "../../node_modules/lit-html/lit-html.js";
import productServices from "../services/productServices.js";
import page from "../../node_modules/page/page.mjs";
import { createNotification } from "../services/clientSideServices.js";
import { checkPermissions } from "../services/permissionService.js";

const rootElement = document.querySelector(".root");

const createTemplate = (onSubmit, canCreate) =>
	html` ${canCreate
		? html`<div class="form-container">
				<h2>Create new product</h2>
				<form @submit=${onSubmit}>
					<input type="text" name="name" placeholder="Product name" />
					<input type="number" name="price" placeholder="Price" />
					<input type="text" name="currency" placeholder="Currency ('Eg USD')" />
					<button class="button" type="submit">Create</button>
				</form>
		  </div>`
		: html`<div class="display-instead"><h2>Permissions denied: no update permissions</h2></div>`}`;

export async function renderCreatePage() {
	async function onSubmit(event) {
		event.preventDefault();
		let productData = Object.fromEntries(new FormData(event.target));
		if (!productData.name || !productData.price || !productData.currency) {
			return alert("All fields are mandatory");
		}
		try {
			await productServices.createProduct(productData);
			page.redirect("/");
			createNotification("Product was created succesfully", "success");
		} catch (error) {
			createNotification("Something went wrong, unable to create product", "alert");
		}
	}
	try {
		let permissions = await checkPermissions();
		let canCreate = permissions.includes("CREATE");
		render(createTemplate(onSubmit, canCreate), rootElement);
	} catch (error) {
		createNotification(error, "alert");
	}
}
