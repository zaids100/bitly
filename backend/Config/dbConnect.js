require('dotenv').config();
const mongoose=require('mongoose');

async function dbConnect(){
      try{
           const conn=await mongoose.connect(process.env.DB_CONN);
           console.log("Connection to Database Success");
      }catch(err){
         console.log(err);
      }
}

module.exports={dbConnect};