import { page, html } from "../../lib.js";
import productServices from "../../services/productServices.js";
import { createNotification } from "../../services/utils.js";

export const productTemplate = (product, hasPermissons) => html`<div class="product">
	<div class="image-container">
		<img src="./static/images/photo-1523275335684-37898b6baf30.jfif" alt="" />
	</div>
	<div class="info-wrapper">
		<div class="product-info">
			<p class="product-name">${product.name}</p>
			<p class="product-price">Price: ${product.price} ${product.currency}</p>
		</div>
		<div class="buttons-wrapper">
			${hasPermissons.canEdit
				? html`<a class="button edit" href=${`/edit/${product._id}`}><i class="fa-solid fa-pen"></i>Edit</a>`
				: ""}
			${hasPermissons.canDelete
				? html`<a id=${product._id} @click=${onDelete} class="button delete" href="javascript:void(0)"
						><i class="fa-solid fa-trash-can"></i>Delete</a
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
			createNotification("Product succesfully deleted", "success");
		} catch (error) {
			page.redirect("/");
			createNotification("Something went wrong, unable to delete product", "error");
		}
	}
}
