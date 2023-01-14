const serverless = require("serverless-http");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser())


app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/cost",(req,res)=>{
  res.status(200).json({
    monthlyCost : '2.000',
    cookies : JSON.stringify(req.cookies)
})
})


app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});







module.exports.handler = serverless(app);
