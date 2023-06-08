const mongoose=require('mongoose');
const Schema = mongoose.Schema;


const logInSchema=new Schema({
  name:{
      type:String,
      required:true
  },
  password:{
      type:String,
      required:true
  }
})

const LogInSchema=new mongoose.model('logInSchema',logInSchema)

module.exports=LogInSchema