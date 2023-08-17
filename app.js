const route =require("./route");
const express =require("express");
var bodyParser = require('body-parser')
const app=express();
app.use(route);
const port =3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get("/regster",(req,res)=>{
    res.sendFile(__dirname+"/index.html");


})
app.post("/regster",(req,res)=>{
    const name=req.body.name;
    const age=req.body.age;
    res.send(`My name is ${name}.i am ${age} Years Old.`)
    // res.send("hello")
   
})
// app.get("/",(req,res)=>{
//     const id =req.query.id;
//     const name=req.query.name;
//     res.send(`this is my ${id}And name:${name}`)
// })

// app.use("/rester",(req,res)=>{
//     res.status(200).json({
//         name:"Tufan ali",
//         age:12
//     })
// })
// app.use("/login",(req,res)=>{
//     res.statusCode = 200;
//     res.sendFile(__dirname + "/index.html")
// })


// app.get('/',(req,res)=>{
//     res.send("Tufan ");
// });





// app.get('/about',(req,res)=>{
//     res.send("I am about route ");
// });
// app.get('/home',(req,res)=>{
//     res.send("I am home route");
// });





// app.post('/',(req,res)=>{
//     res.send("Tufan post");
// });
// app.put('/',(req,res)=>{
//     res.send("Tufan pp");
// });
// app.delete('/',(req,res)=>{
//     res.send("Tufan dd ");
// });

app.listen(port,()=>{
    console.log(`http:localhost:${port}`)
})
module.exports=app;