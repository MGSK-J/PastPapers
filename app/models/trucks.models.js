module.exports=mongoose=>{
    var schema=mongoose.Schema(
      {
        id:String,
        manufacturer:String,
        model:String,
        colour:String,
        capacity:Number
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
    const Trucks=mongoose.model("trucks",schema);
    return Trucks;
  };