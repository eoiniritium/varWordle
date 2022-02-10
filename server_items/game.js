const path = require('path/posix');
const express = require('express'),
    router = express.Router();

function p(x){
    return path.join(__dirname, x);
}




router.post('/newgame', (req, res) => {
    console.log(req.body);
    res.json(); // Send json back
});

module.exports = router;