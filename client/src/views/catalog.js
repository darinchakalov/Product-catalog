import { html, render } from "../../node_modules/lit-html/lit-html.js";
import dataServices from "../services/productServices.js";
import { productTemplate } from "./partials/product.js";

const rootElement = document.querySelector(".root");

export const catalogTemplate = (products) => html` <div id="products-container" class="product-view-grid">
	${products.map(productTemplate)}
</div>`;

export async function catalogPage(context) {
	let products = await dataServices.getAllProducts();
	render(catalogTemplate(products), rootElement);
}
