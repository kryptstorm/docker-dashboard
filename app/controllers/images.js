// External modules
const Docker = require("dockerode");
const Config = require("config");

const docker = new Docker(Config.get("docker"));

exports.list = (req, res) => {
  res.locals.page = {
    title: "Docker Images",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Images" }]
  };
  docker.listImages((err, images) => {
    if (err) return res.render("errors/500", { err, err });

    return res.render("images/list", { images });
  });
};
