const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json())

app.get("/", function(req,res){
    res.sendFile(__dirname +"/index.html");
});
app.post("/", function(req,res){
    var firstNum = Number(req.body.num1);
    var secondNum = Number(req.body.num2);
    var result = firstNum+secondNum;
    res.send("your sum is :: "+ result);
});

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmicalc.html");
});
app.post("/bmicalculator", function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/(height*height);
    res.send("your BMI is :: "+ bmi);
});

app.listen(3000, function(){
    console.log("server started at port 3000");
});