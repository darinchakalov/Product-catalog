import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createNotification } from "../services/clientSideServices.js";
import { checkPermissions } from "../services/permissionService.js";
import dataServices from "../services/productServices.js";
import { productTemplate } from "./partials/product.js";

const rootElement = document.querySelector(".root");

export const catalogTemplate = (products, hasPermissons) => html` <div
	id="products-container"
	class="product-view-grid"
>
	${hasPermissons.canRead
		? html`${products.map((p) => productTemplate(p, hasPermissons))}`
		: html`<div class="display-instead"><h2>Permissions denied: no read permissions</h2></div>`}
</div>`;

export async function renderCatalogPage(context) {
	try {
		let products = await dataServices.getAllProducts();
		let permissions = await checkPermissions();
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
