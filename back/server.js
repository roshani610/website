const express=require('express');
const body_parser=require('body-parser');
require('dotenv').config();
const app=express();

let PORT=process.env.PORT || 4400;
app.use(body_parser.urlencoded({extended:true}));
app.listen(PORT,function(){
    console.log("app listening to "+PORT);
});
app.get("/",function(re,resp){
    resp.status(200).send("Hello world");
});