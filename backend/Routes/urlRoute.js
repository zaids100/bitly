const router=require('express').Router();
const {generateShortUrl,getOriginalUrl}=require('../Controllers/urlController');
router.get('/',(req,res)=>{
     res.json({msg : "Hello From Server"});
})
router.post('/generate-short-id',generateShortUrl);
router.get('/:shortUrl',getOriginalUrl);

module.exports={urlRoute :router};