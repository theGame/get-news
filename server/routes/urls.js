const routes = require("express").Router();
const request = require("request");
const mongoose = require("mongoose");
const Url = require("./../models/urls");

routes.post("/api/add/url", (req, res) => {
    const { url } = req.body;

    Url.find({}, (err, urlsList) => {
        if(err) {
            res.status(404).json({
                msg: err.message,
                code: err && err.code || "",
                hostname: err && err.hostname || "",
            });
            return;
        }
        if(urlsList.some( item => item.url === url)) {
            res.status(404).json({
                msg: `You already has ${url} added to your url list!`,
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
                    msg: "Your address is not correct!",
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
                    msg: err.message,
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
                msg: "Your address is not correct!",
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

routes.get("/api/urls", (req, res) => {
    Url.find({}, (err, urlsList) => {
        if (err) {
            res.status(404).json({
                msg: err.message,
            });
            return;
        }

        const list = urlsList.map(item => ({
            id: item._id,
            url: item.url,
            serverName: item.serverName,
            createdAt: item.createdAt,
        }));

        res.status(200).json({
            list,
        });
    });
});

routes.delete("/api/delete/url/:id", (req, res) => {
    Url.remove({ _id: req.params.id}, function(err) {

        if(err) {
            res.status(404).json({
                msg: err.message,
            });
            return;
        }

        res.status(200).json({
            msg: `Url with id: ${req.params.id} successfully removed!`,
        });
    })
});

module.exports = routes;