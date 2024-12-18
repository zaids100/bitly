const mongoose=require('mongoose');

const urlModel=new mongoose.Schema({
      shortUrl : {
        type : String,
        required : true
      },
      originalUrl : {
        type : String,
        required : true
      }
})

const Url=mongoose.model('Urls',urlModel);

module.exports={Url};