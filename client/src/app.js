import page from "../node_modules/page/page.mjs";

import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";

import { changeView } from "./services/changeViewService.js";

page.redirect("/", "/catalog");
page.redirect("/index.html", "/catalog");

page("/catalog", catalogPage);
page("/create", createPage);

page.start();

changeView();
