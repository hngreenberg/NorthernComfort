const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Reviewmodel = model("Reviewmodel", reviewSchema);

module.exports = Reviewmodel;
