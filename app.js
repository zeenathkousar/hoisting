const dotenv=require('dotenv').config();

const express=require('express');
const app=express();

const PORT=process.env.PORT || 3000

const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/pugdb1')
mongoose.connect('mongodb+srv://ribkatut123:ribkatut123@cluster0.tyaeevk.mongodb.net/dbribka?retryWrites=true&w=majority').then(()=>{
        console.log('database connected')
    }).catch((e)=>{
        console.log(`databse not connected - got some err in connecting`)
        console.log(e)
    });

    const  pugschema2=new mongoose.Schema({
        Name: {
            type:String,
            required:true,
        },
        age: {
            type:Number,
        }, 
        year: {
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true
        }
    
        
    });

    var ribkacollection=mongoose.model('ribkacollection',pugschema2);

    


app.get('/',(req,res)=>{
    res.send('hello myapp')
})

app.get('/home',(req,res)=>{
    res.send('hello home')
})
app.listen(PORT,()=>{
    console.log('server started')
})