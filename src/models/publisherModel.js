const mongoose = require("mongoose");

const newPublisherSchema = new mongoose.Schema({
    name: String,
headQuarter: String

},{timestamps: true});

module.exports= mongoose.model("newPublisher", newPublisherSchema);