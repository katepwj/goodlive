const express=require("express");
const app=express();
const cors = require("cors");

const home=require("./homeRouter")

app.use(cors())

app.use("/home",home)

let port=809
app.listen(port,()=>{
  console.log("server on ",port);
})


