// System modules
const Path = require("path");

// External module
const Express = require("express");
const ExHbs = require("express-handlebars");
const _ = require("lodash");

// Internal modules
const npmPackage = require("../package.json");
const Images = require("./controllers/images");
const hbsHelpers = require("./hbs-helpers");

// Init application
const app = Express();

// Setup view engine
const viewEngine = ExHbs.create({
  extname: ".hbs",
  layoutsDir: "app/views/_layouts/",
  partialsDir: ["app/views/_partials/"],
  defaultLayout: "app",
  helpers: hbsHelpers
});
app.engine("hbs", viewEngine.engine);
app.set("views", Path.join(__dirname, "/views"));
app.set("view engine", "hbs");

// Setup app params
app.disable("x-powered-by");
_.assign(app.locals, {
  version: npmPackage.version,
  author: npmPackage.author
});

// Routes
app.get("/", (req, res) => res.render("dashboard/index"));
app.get("/dashboard", (req, res) => res.render("dashboard/index"));

app.get("/images", Images.list);

// Static content
app.use(Express.static("public"));

// Begin listen
app.listen(3000, () => console.log("App is running on http://localhost:3000"));
