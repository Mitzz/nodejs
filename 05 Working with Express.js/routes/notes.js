const path = require('path');
var fs=require('fs');


const express = require('express');

const router = express.Router();

router.post('/delete-image', (req, res) => {
    console.log(req.body["image-path"]);
    const imagePath = req.body["image-path"];
    fs.appendFile('delete path.txt', imagePath + "\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    
    res.send("Response");
});



module.exports = router;