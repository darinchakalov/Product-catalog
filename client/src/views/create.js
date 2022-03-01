import { html, render } from "../../node_modules/lit-html/lit-html.js";

const rootElement = document.querySelector(".root");

const createTemplate = () => html`<div class="form-container">
	<h2>Create new product</h2>
	<form action="">
		<input type="text" name="name" placeholder="Product name" />
		<input type="text" name="name" placeholder="Price" />
		<input type="text" name="name" placeholder="Currency ('Eg USD')" />
		<button class="button" type="submit">Create</button>
	</form>
</div>`;

export function createPage() {
	render(createTemplate(), rootElement);
}
