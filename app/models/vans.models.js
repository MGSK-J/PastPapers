module.exports=mongoose=>{
    var schema=mongoose.Schema(
      {
      id:String,
      manufacturer:String,
      model:String,
      colour:String,
      seats:Number
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
    const Vans=mongoose.model("vans",schema);
    return Vans;
  };