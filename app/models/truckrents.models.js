module.exports=mongoose=>{
    var schema=mongoose.Schema(
      {
        id:String,
        truck_id:String,
        customer_id:String,
        rentedOn:Date,
        numberOfDays:Number,
        returnedOn:Date,
        rent:Number
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
    const Truckrents=mongoose.model("truckrents",schema);
    return Truckrents;
  };