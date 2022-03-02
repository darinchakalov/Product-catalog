import { html, render } from "../../node_modules/lit-html/lit-html.js";
const rootElement = document.querySelector(".root");

const notFoundTemplate = () => html`<div class="display-instead">
	<h2>Opps... the page you are looking for was not found</h2>
</div>`;

export function renderNotFoundPage() {
	render(notFoundTemplate(), rootElement);
}
