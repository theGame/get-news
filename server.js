const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const request = require("request");

const mongoURIConnection = 'mongodb://test:Qwerty1!@ds251894.mlab.com:51894/news-db';
const host = 'http://localhost';
const port = 5000;

const app = express();
app.use(methodOverride());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(mongoURIConnection, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('connected', () => {
    app.listen(port, 'localhost', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.info('==> Listening on port %s. Open up %s:%s/ in your browser.', port, host, port);
    });
});
db.on('error', (err) => {
    console.info('Mongoose default connection error: %s', err);
    process.exit(1);
});
db.on('disconnected', () => console.info('Mongoose default connection disconnected'));
db.on('SIGINT', () => {
    db.close();
    process.exit();
});
app.post('/api/add/url', (req, res) => {
    request({
        uri: url,
    }, function(err, response, body) {

    });
});

app.post('/api/test/url', (req, res) => {
    const { url } = req.body;

    request({
        uri: url,
    }, function(err, response) {
        console.log(response);
        debugger
        if (err) {
            res.status(404).json({
                error: "Your address is not correct!",
                code: err.code,
                hostname: err.hostname
            });
            return;
        }

        res.status(200).json({
            url: response.url,
            statusCode: response.statusCode,
            statusMessage: response.statusMessage,
            contentType: "",
            serverName: response.headers.server,
        });
    });
});

app.listen(port, () => `Server running on port ${port}`);