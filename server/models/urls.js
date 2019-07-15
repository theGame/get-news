const mongoose = require("mongoose");
const { Types } = mongoose.Schema;

const urlSchema = mongoose.Schema({
    url: Types.String,
    serverName: Types.String,
},{
    timestamps: {
        createdAt: "createdAt",
        updatedAt: false,
    },
});

module.exports = mongoose.model('Url', urlSchema);