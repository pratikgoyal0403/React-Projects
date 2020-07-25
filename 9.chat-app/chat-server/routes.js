const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send('<h1>this page is served from server js</h1>')
})
    
module.exports = router;