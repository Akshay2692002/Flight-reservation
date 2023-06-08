const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const BookedSchema = new Schema({

  Flight_Name:{
    type:String,
    required:true
  },
  Seats_Booked:{
    type:Number,
    required:true
  },
  Booking_Id:{
    type:Number,
    required:true
  },
  Date_Of_Booking:{
    type:Date,
    required:true
  },
  Time_Of_Travel: {
    type: Number,
    required: true
  },
  Departure:{
    type:String,
    required: true
  },
  Destination:{
    type:String,
    required: true
  }

 
},{timestramps: true});
const BookedDet=mongoose.model('BookedSchema',BookedSchema);
module.exports=BookedDet;