const express = require("express");
const bodyParser = require("body-parser");
const request  = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
});



app.listen(3000,()=>{
    console.log("Server is running at 3000 port");
});