import { html, render } from "../../node_modules/lit-html/lit-html.js";
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
		: html`<div class="permissions">Permissions denied: no read permissions</div>`}
</div>`;

export async function renderCatalogPage(context) {
	let products = await dataServices.getAllProducts();
	let permissions = await checkPermissions();
	let hasPermissons = {
		canDelete: permissions.includes("DELETE"),
		canEdit: permissions.includes("UPDATE"),
		canRead: permissions.includes("READ"),
		canCreate: permissions.includes("CREATE"),
	};
	render(catalogTemplate(products, hasPermissons), rootElement);
}
