let Customers = null; 
module.exports=mongoose=>{
  if (!Customers) {
    var schema=mongoose.Schema(
      {
        id:String,
        name:String,
        address:String
      },
      {
          timestamps:true
      }
    );
  
    schema.method("toJSON",function(){
     const {_v,_id,...Object}=this.Object();
     object.id=_id;
     return object;
    });
    Customers = mongoose.model("customers", schema);
  }
  return Customers;
  };