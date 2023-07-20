module.exports=app => {
  const vans=require("../controllers/vans.controller");
  let router= require("express").Router();

  router.post("/",vans.create);
  router.get("/",vans.findAll);

  app.use("/api/vans",router);
};