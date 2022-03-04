import { html, render } from "../lib.js";
import { createNotification } from "../services/utils.js";
import { checkPermissions } from "../services/permissionService.js";
import dataServices from "../services/productServices.js";
import { productTemplate } from "./partials/product.js";

const rootElement = document.querySelector(".root");

export const catalogTemplate = (products, hasPermissons) => html` <div
	id="products-container"
	class="product-view-grid"
>
	<!-- Check if there are products in the catalog -->
	${products.length > 0
		? //First, there is check if read permissions are allowed from the API
		  // If READ permissions exist, then each prodcut is mapped to the productTemplate
		  html`${hasPermissons.canRead
				? html`${products.map((p) => productTemplate(p, hasPermissons))}`
				: //If no READ permissions are present the following message is displayed
				  html`<div class="display-instead"><h2>Permissions denied: no read permissions</h2></div>`}`
		: // If there are no products the following message is displayed
		  html`<div class="display-instead"><h2>There are no products in the catalog</h2></div>`}
</div>`;

export async function renderCatalogPage() {
	try {
		// Fetching the prodcuts and the permissions array from the API
		let [products, permissions] = await Promise.all([dataServices.getAllProducts(), checkPermissions()]);

		// Object which check if specific action is allowed
		let hasPermissons = {
			canDelete: permissions.includes("DELETE"),
			canEdit: permissions.includes("UPDATE"),
			canRead: permissions.includes("READ"),
			canCreate: permissions.includes("CREATE"),
		};
		render(catalogTemplate(products, hasPermissons), rootElement);
	} catch (error) {
		createNotification("Unable to fetch data from the server", "alert");
	}
}
