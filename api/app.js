const express = require("express");
const { PORT } = require("./src/config/constants.js");

const app = express();

require("./src/config/express.js")(app);
require("./src/config/router.js")(app);

app.listen(PORT, console.log(`Server running at http://localhost:3030...`));
