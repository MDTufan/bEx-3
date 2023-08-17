const express =require("express");
const route =express.Router();
// route.get('/',(req,res)=>{
//     res.send("Tufan all ");
// });
route.get('/res',(req,res)=>{
    res.send("Tufan all rester ");
});
route.get('/log',(req,res)=>{
    res.send("Tufan all login");
});

module.exports=route;
