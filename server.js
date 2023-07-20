const express=require("express");
const cors=require("cors");

const app=express();

var corsOpt={
    origin:"http://localhost:8080"
};

app.use(cors(corsOpt));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const db=require("./app/models");

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

 app.get("/",(req,res)=>{
   res.json({message:"welcome"});
 });

 require("./app/routes/vans.routes")(app);

const port=8080;

app.listen(port,()=>{
  console.log("server runnning");
});