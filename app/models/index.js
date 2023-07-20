const dbConfig=require("../config/db.config");

const mongoose=require("mongoose");

const db={};
db.mongoose=mongoose;
db.url=dbConfig.url;
db.vans=require("./customers.models")(mongoose);
db.trucks=require("./trucks.models")(mongoose);
db.customers=require("./customers.models")(mongoose);
db.vansrents=require("./vanrents.models")(mongoose);
db.truckrents=require("./truckrents.models")(mongoose);

module.exports=db;
