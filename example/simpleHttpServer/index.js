const http = require('http');
const url = require('url');
const queryString = require('querystring');
const fs = require('fs');
const game = require('./lib');

// 最多赢三次就不玩了
let winCount = 0;

const server = http.createServer((req,res) => {
    const pathParse = url.parse(req.url);
    if (pathParse.pathname === '/favicon.ico') {
        res.writeHead(200);
        res.end();
    }
    if (pathParse.pathname === '/game') {
        const query = queryString.parse(pathParse.query);
        const playerAction = query.action;
        const result = game(playerAction);
        if ( winCount > 3 ) {
            res.writeHead(500);
            res.end('我不玩了，你看着办把');
        }
        if ( result === 1 ) {
            winCount++;
        } else {
            winCount = 0;
        }
        const resultString = result === 0 ? "平局" : result === -1 ? "你输了" : "你赢了"
        res.writeHead(200);
        res.end(resultString);
    }

    if ( pathParse.pathname === '/play' ) {
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    }
});

server.listen(3000, () => {
    console.log('server is running...');
});