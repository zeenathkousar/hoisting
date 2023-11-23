const express=require('express');
const app=require();
const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/dbdeploy")
    .then(()=> console.log('mongodb connected'))
    .catch((err)=> console.log('mongo err'))

// const schema1=new mongoose.Schema({
//         firstName: {
//             type: String,
//             required : true,
//         },
//         lastName: {
//             type: String,
//         },
//         email: {
//             type:String,
//             required:true,
//             unique : true,
//         },
//         jobTitle: {
//             type: String,
//         },
//         gender : {
//             type: String,
//         },
    
//     });
    
// const userobj=mongoose.model('user',schema1);
    
    
app.get('/',(req,res)=>{
    res.send('hello myapp')
})

app.listen(3000,()=>{
    console.log('server started')
})