import { html } from "../../../node_modules/lit-html/lit-html.js";

export const productTemplate = (product) => html`<div class="product">
	<div class="image-container">
		<img src="./static/images/photo-1523275335684-37898b6baf30.jfif" alt="" />
	</div>
	<div class="info-wrapper">
		<div class="product-info">
			<p class="product-name">${product.name}</p>
			<p class="product-price">${product.price} ${product.currency}</p>
		</div>
		<div class="buttons-wrapper">
			<a class="button edit" href=${`/edit/${product._id}`}>Edit</a>
			<a class="button delete" href=${`/delete/${product._id}`}>Delete</a>
		</div>
	</div>
</div>`;


