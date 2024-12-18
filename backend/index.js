require('dotenv').config();
const cors = require('cors');
const express=require('express');
const app=express();
const {dbConnect}=require('./Config/dbConnect');
const {urlRoute}=require('./Routes/urlRoute');
const shortid = require('shortid');

dbConnect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(cors({
    origin : ["https://bitly-one.vercel.app","https://bitly-captain-calculus-projects.vercel.app"],
    methods : ["GET","POST"],
    credentials : true
}));  // Cross-Origin Resource Sharing middleware

app.use('/',urlRoute)


app.listen(process.env.PORT,()=>{
    console.log("Server Running on port ",process.env.PORT);
})

