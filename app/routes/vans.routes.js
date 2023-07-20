module.exports=app=>{
  const vans=require("../controllers/vans.controller");

  var router=require("express").Router();

  router.post("/",vans.create);

  router.post("/",vans.findAll);

  app.use("/api/vans",router);
};