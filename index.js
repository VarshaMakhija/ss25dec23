const express=require("express");
const cors=require("cors");
const mysql=require("mysql2");

const app=express();
app.use(cors());
app.use(express.json());

const con=mysql.createConnection({
host:"localhost",
user:"root",
password:"abc123",
database:"ss_25dec23"
});

app.post("/save",(req,res)=>{
let data=[req.body.name,req.body.company,req.body.pkg];
console.log(data);
let sql="insert into student123 values(?,?,?)";
con.query(sql,data,(err,result)=>{
if(err)	res.send(err);
else	res.send(result);
});
});
app.listen(9000,()=>{console.log("server ready @ 9000 port");})
