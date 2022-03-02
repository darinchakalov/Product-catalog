import { html } from "../../../node_modules/lit-html/lit-html.js";
import productServices from "../../services/productServices.js";
import page from "../../../node_modules/page/page.mjs";

export const productTemplate = (product, hasPermissons) => html`<div class="product">
	<div class="image-container">
		<img src="./static/images/photo-1523275335684-37898b6baf30.jfif" alt="" />
	</div>
	<div class="info-wrapper">
		<div class="product-info">
			<p class="product-name">${product.name}</p>
			<p class="product-price">${product.price} ${product.currency}</p>
		</div>
		<div class="buttons-wrapper">
			${hasPermissons.canEdit ? html`<a class="button edit" href=${`/edit/${product._id}`}>Edit</a>` : ""}
			${hasPermissons.canDelete
				? html`<a id=${product._id} @click=${onDelete} class="button delete" href="javascript:void(0)"
						>Delete</a
				  >`
				: ""}
		</div>
	</div>
</div>`;

async function onDelete(e) {
	const confirmed = confirm("Are you sure you want to delete this item?");
	if (confirmed) {
		try {
			await productServices.deleteProduct(e.target.id);
			page.redirect("/");
		} catch (error) {
			alert(error);
		}
	}
}
