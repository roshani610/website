const express=require('express');
const body_parser=require('body-parser');
const app=express();

app.use(body_parser.urlencoded({extended:true}));
app.listen(3000,function(){
    console.log("app listening to 3000");
});
app.get("/",function(re,resp){
    resp.status(200).send("Hello world");
});