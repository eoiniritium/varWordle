const path = require('path/posix');
const express = require('express'),
    router = express.Router();

function p(x){
    return path.join(__dirname, x);
}


router.get('/:filename', (req, res) => {
    res.sendFile(p('../src/JS/' + req.params.filename));
});

module.exports = router;