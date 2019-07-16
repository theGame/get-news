const routes = require("express").Router();
const request = require("request");
const mongoose = require("mongoose");

const Url = require("./../models/urls");

routes.post("/api/add/url", (req, res) => {
    const { url } = req.body;

    Url.find({}, (err, urlsList) => {
        if(err) {
            res.status(404).json({
                error: err,
                code: err && err.code || "",
                hostname: err && err.hostname || "",
            });
            return;
        }
        if(urlsList.some( item => item.url === url)) {
            res.status(404).json({
                error: "duplicated",
                code: err && err.code || "",
                hostname: err && err.hostname || "",
            });
            return;
        }

        request({
            uri: url,
        }, function(err, response) {
            //console.log(response);
            if (err) {
                res.status(404).json({
                    error: "Your address is not correct!",
                    code: err.code,
                    hostname: err.hostname,
                });
                return;
            }

            const urlToStore = new Url({
                id: new mongoose.Types.ObjectId(),
                url: url,
                serverName: response.headers.server,
            });

            urlToStore.save().then(data => {
                res.status(200).json({
                    url: data.url || url,
                    statusCode: data.statusCode,
                    statusMessage: data.statusMessage,
                    serverName: data.serverName,
                });
            }).catch(err => {
                res.status(500).json({
                    error: err.message,
                });
            });
        });
    });

});

routes.post("/api/test/url", (req, res) => {
    const { url } = req.body;

    request({
        uri: url,
    }, function(err, response) {
        if (err) {
            res.status(404).json({
                error: "Your address is not correct!",
                code: err.code,
                hostname: this.href,
            });
            return;
        }

        res.status(200).json({
            url: response.url || url,
            statusCode: response.statusCode,
            statusMessage: response.statusMessage,
            serverName: response.headers.server,
        });
    });
});

module.exports = routes;