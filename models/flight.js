const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({

  Name:{
    type:String,
    required:true
  },
  Id:{
    type:Number,
    required:true
  },
  Departure:{
    type:String,
    required:true
  },
  Destination: {
    type: String,
    required: true
  },
  Departure_Date:{
    type:Date,
    required: true
  },
  Time:{
    type:String,
    required:true
  }
 
},{timestramps: true});
const Detail=mongoose.model('FlightSchema',FlightSchema);
module.exports=Detail;