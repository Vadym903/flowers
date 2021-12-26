const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/flowers'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));
const server = http.createServer(app);
server.listen(port, () => console.log(`App running on: http://localhost:${port}`));


function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    console.log(req);
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use(requireHTTPS);
app.use(express.static('./dist/flowers'));

app.get('/*', (req, res) => {
    console.log(req);
    console.log(res);
    res.sendFile('index.html', {root: 'dist/flowers/'});
});
