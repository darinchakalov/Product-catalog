import page from "../node_modules/page/page.mjs";

import { changeView } from "./services/changeViewService.js";

import { renderCatalogPage } from "./views/catalog.js";
import { renderCreatePage } from "./views/create.js";
import { renderEditPage } from "./views/edit.js";

page.redirect("/", "/catalog");
page.redirect("/index.html", "/catalog");

page("/catalog", renderCatalogPage);
page("/create", renderCreatePage);
page("/edit/:id", renderEditPage);

page.start();

changeView();
