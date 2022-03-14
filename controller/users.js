const express =require('express')
const router =express.Router()
var bodyParser = require('body-parser')

const User=require('../model/user')



router.get('/',async(req,res)=>{
   try{
       const users= await User.find()
       res.json(users)

   }catch(err){
       res.send('Error'+err)
   }
})

router.post('/',async(req,res)=>{
    const user=new User(req.body)
       
    try{
        const u1=await user.save()
        res.json(u1)

    }catch(err){
        res.send('Error of post'+err)
    }
})
router.patch('/:id',async(req,res)=>{
    try{
          const user=await User.findByIdAndUpdate(req.params.id,req.body)
         
         const u1= await user.save()
          res.json(u1)
          
    }catch(err){
        res.send(err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
       const user=await User.findByIdAndDelete(req.params.id)
       if(!user) {res.status(404).send("No item found");}
       else{
       res.status(200).send('succesfully deleted');
       }
    }catch(err){
        res.send(err)
    }
})

module.exports=router