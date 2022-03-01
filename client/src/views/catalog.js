import { html, render } from "../../node_modules/lit-html/lit-html.js";

const rootElement = document.querySelector(".root");

export const catalogTemplate = (item) => html` <div id="products-container" class="product-view-grid">
	<div class="product">
		<div class="image-container">
			<img src="./static/images/photo-1523275335684-37898b6baf30.jfif" alt="" />
		</div>
		<div class="info-wrapper">
			<div class="product-info">
				<p class="product-name">TV</p>
				<p class="product-price">1000 USD</p>
			</div>
			<div class="buttons-wrapper">
				<a class="button edit" href=${`/edit/${item?._id}`}>Edit</a>
				<a class="button delete" href=${`/delete/${item?._id}`}>Delete</a>
			</div>
		</div>
	</div>
	<div class="product">
		<div class="image-container">
			<img src="./static/images/photo-1523275335684-37898b6baf30.jfif" alt="" />
		</div>
		<div class="info-wrapper">
			<div class="product-info">
				<p class="product-name">TV</p>
				<p class="product-price">1000 USD</p>
			</div>
			<div class="buttons-wrapper">
				<a class="button edit" href=${`/edit/${item?._id}`}>Edit</a>
				<a class="button delete" href=${`/delete/${item?._id}`}>Delete</a>
			</div>
		</div>
	</div>
	<div class="product">
		<div class="image-container">
			<img src="./static/images/photo-1523275335684-37898b6baf30.jfif" alt="" />
		</div>
		<div class="info-wrapper">
			<div class="product-info">
				<p class="product-name">TV</p>
				<p class="product-price">1000 USD</p>
			</div>
			<div class="buttons-wrapper">
				<a class="button edit" href=${`/edit/${item?._id}`}>Edit</a>
				<a class="button delete" href=${`/delete/${item?._id}`}>Delete</a>
			</div>
		</div>
	</div>
	<div class="product">
		<div class="image-container">
			<img src="./static/images/photo-1523275335684-37898b6baf30.jfif" alt="" />
		</div>
		<div class="info-wrapper">
			<div class="product-info">
				<p class="product-name">TV</p>
				<p class="product-price">1000 USD</p>
			</div>
			<div class="buttons-wrapper">
				<a class="button edit" href=${`/edit/${item?._id}`}>Edit</a>
				<a class="button delete" href=${`/delete/${item?._id}`}>Delete</a>
			</div>
		</div>
	</div>
	<div class="product">
		<div class="image-container">
			<img src="./static/images/photo-1523275335684-37898b6baf30.jfif" alt="" />
		</div>
		<div class="info-wrapper">
			<div class="product-info">
				<p class="product-name">TV</p>
				<p class="product-price">1000 USD</p>
			</div>
			<div class="buttons-wrapper">
				<a class="button edit" href=${`/edit/${item?._id}`}>Edit</a>
				<a class="button delete" href=${`/delete/${item?._id}`}>Delete</a>
			</div>
		</div>
	</div>
	<div class="product">
		<div class="image-container">
			<img src="./static/images/photo-1523275335684-37898b6baf30.jfif" alt="" />
		</div>
		<div class="info-wrapper">
			<div class="product-info">
				<p class="product-name">TV</p>
				<p class="product-price">1000 USD</p>
			</div>
			<div class="buttons-wrapper">
				<a class="button edit" href=${`/edit/${item?._id}`}>Edit</a>
				<a class="button delete" href=${`/delete/${item?._id}`}>Delete</a>
			</div>
		</div>
	</div>
</div>`;

export function catalogPage(context) {
	render(catalogTemplate(), rootElement);
}
