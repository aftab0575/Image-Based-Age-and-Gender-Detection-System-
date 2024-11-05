// Basic Lib Import
const express =require('express');
const router =require('./src/routes/api');
const routerExamples =require('./src/routes/examples');
const app= new express();
const bodyParser =require('body-parser');

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(xss())
app.use(hpp())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


// API Routing Implement
app.use("/api/v1",router)


// Example Routing Implement
app.use(express.static('examples'))
app.use("/",routerExamples)


// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(200).json({status:"",data:""})
})

module.exports=app;













