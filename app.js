const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));//teloling the app to use body parser and use this same line in all projects

app.use(express.static("staticfiles"));//using data of static files located in one folder

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
  var fname=req.body.fname;
  var lname=req.body.lname;
  var emailid=req.body.email;
  console.log(fname, lname, emailid);
})

app.listen(3000,function(req,res){
  console.log("Server is running on port 3000");
})
