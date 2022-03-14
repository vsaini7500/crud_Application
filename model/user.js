const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
     name:{
         type: String,
         
     },
     age:{
         type:Number,
         
     },
     course:{
         type:String,
         default:"MCA",
         
     },
     college:{
         type:String
     }



})
module.exports=mongoose.model('User',userSchema)