const routes = require('express').Router();
const request = require("request");

routes.post('/api/add/url', (req, res) => {
    request({
        uri: url,
    }, function(err, response, body) {

    });
});

routes.post('/api/test/url', (req, res) => {
    const { url } = req.body;

    request({
        uri: url,
    }, function(err, response) {
        console.log(response);
        if (err) {
            res.status(404).json({
                error: "Your address is not correct!",
                code: err.code,
                hostname: err.hostname,
            });
            return;
        }

        res.status(200).json({
            url: response.url || url,
            statusCode: response.statusCode,
            statusMessage: response.statusMessage,
            contentType: "",
            serverName: response.headers.server,
        });
    });
});

module.exports = routes;