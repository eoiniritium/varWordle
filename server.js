const express = require('express');
const path = require('path/posix');
const s = express();
const port = 3000;

const css  = require('./server_items/css.js' );
const js   = require('./server_items/js.js'  );
const img  = require('./server_items/img.js' );
const game = require('./server_items/game.js');




function p(x){
    return path.join(__dirname, x);
}

s.use('/css' , css );
s.use('/js'  , js  );
s.use('/img' , img );
s.use('/game', game);





s.get('/', (req, res) => {
    res.sendFile(p('src/html/landing.html'));
});

s.get('/newgame', (req, res) => {
    res.sendFile(p('src/html/newgame.html'));
});

s.get('*', (req, res) => {
    res.sendFile(p('src/html/404.html'));
});
s.listen(port);
console.log(`http://localhost:${port}`);