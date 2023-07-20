const express=require("express");
const cors=require("cors");

const port=8080;

const app=express();
const db=require("./app/models");
require("./app/routes/vans.routes")(app);

var corsOpt={
    origin:"http://localhost:8080"
};

app.use(cors(corsOpt));

//Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

db.mongoose
 .connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
 .then(()=>{
    console.log("successfully connected");
 })
 .catch(err=>{
    console.log("cannot connect",err);
    process.exit();
 });

//Routes to be defined

//Start the server, listening on port
app.listen(port,()=>{
  console.log("server runnning");
});