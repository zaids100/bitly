const {Url} = require('../Models/urlModel');  // Import the model
const shortid = require('shortid');  // Import the shortid library

async function generateShortUrl(req, res) {
    try {
        const { originalUrl } = req.body;
       
        if (!originalUrl) {
            return res.status(400).json({ message: 'Original URL is required' });
        }
        const shortUrl = shortid.generate();  

        const newUrl=await Url.create({shortUrl,originalUrl});

        res.status(200).json({
            message: 'Short URL generated successfully',
            shortUrl: `${req.protocol}://${req.get('host')}/${shortUrl}`,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

async function getOriginalUrl(req, res) {
    
    const { shortUrl } = req.params;

    try {
        
        const result = await Url.findOne({ shortUrl });
        
        if (!result) {
            return res.status(404).json({ message: 'Short URL not found' });
        }
        res.redirect(result.originalUrl);
        res.status(200).json({
            message: 'Original URL found',
            originalUrl: result.originalUrl
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
}

module.exports = {generateShortUrl,getOriginalUrl};
