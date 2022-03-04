import { html, render, page } from "../lib.js";
import productServices from "../services/productServices.js";
import { createNotification } from "../services/utils.js";
import { checkPermissions } from "../services/permissionService.js";

const rootElement = document.querySelector(".root");

const createTemplate = (onSubmit, canCreate) =>
	// Checking of CREATE permissions exist on the API, if not a message is rendered instead of the create form
	html` ${canCreate
		? html`<div class="form-container">
				<h2>Create new product</h2>
				<form @submit=${onSubmit}>
					<label for="name">Product name</label>
					<input type="text" name="name" placeholder="e.g. Table" />
					<label for="price">Price</label>
					<input type="number" name="price" placeholder="e.g. 300" />
					<label for="currency">Currency</label>
					<input type="text" name="currency" placeholder="e.g. USD" />
					<button class="button" type="submit">Create</button>
				</form>
		  </div>`
		: html`<div class="display-instead"><h2>Permissions denied: no update permissions</h2></div>`}`;

export async function renderCreatePage() {
	try {
		let permissions = await checkPermissions();
		let canCreate = permissions.includes("CREATE");
		render(createTemplate(onSubmit, canCreate), rootElement);
	} catch (error) {
		createNotification(error, "alert");
	}

	async function onSubmit(event) {
		event.preventDefault();
		let productData = Object.fromEntries(new FormData(event.target));
		// Verifying if all fields are populated
		if (!productData.name || !productData.price || !productData.currency) {
			return createNotification("All fields are mandatory", "info");
		}
		try {
			// On successful product creation redirect to the home page
			await productServices.createProduct(productData);
			page.redirect("/");
			createNotification("Product succesfully created", "success");
		} catch (error) {
			createNotification("Something went wrong, unable to create product", "alert");
		}
	}
}
