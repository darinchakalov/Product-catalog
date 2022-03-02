import page from "../node_modules/page/page.mjs";

import { renderCatalogPage } from "./views/catalog.js";
import { renderCreatePage } from "./views/create.js";
import { renderEditPage } from "./views/edit.js";
import { renderNotFoundPage } from "./views/404.js";

page.redirect("/", "/catalog");
page.redirect("/index.html", "/catalog");

page("/catalog", renderCatalogPage);
page("/create", renderCreatePage);
page("/edit/:id", renderEditPage);
page("*", renderNotFoundPage);

page.start();
