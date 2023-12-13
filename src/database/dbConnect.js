const mongoose = require("mongoose");
const { URL } = require("../constants/constants.js");

async function dbConnect() {
    await mongoose.connect(URL);
}

module.exports = dbConnect;