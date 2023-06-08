const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  Flight_Id:{
    type:String,
    required:true
  },
  Passenger_Name:{
    type:String,
    required:true
  },
  Passenger_email:{
    type:String,
    required:true
  },
  Passenger_Age: {
    type: Number,
    required: true
  }
  
 
},{timestramps: true});
const UserDet=mongoose.model('UserSchema',UserSchema);
module.exports=UserDet;