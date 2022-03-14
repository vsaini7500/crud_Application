const express=require('express')
const mongoose=require('mongoose')
var bodyParser = require('body-parser')

const url='mongodb://localhost:27017/first'

const app=express();
mongoose.connect(url,{useNewUrlParser:true})
.then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log(err);
})
app.use(bodyParser.json())


const userRouter=require('./controller/users')
app.use('/users',userRouter)
// const con =mongoose.Connection
// con.on('open',function(){
//     console.log('conncted');
// })
app.listen(9000,()=>{
    console.log(`succesful create port`);
})