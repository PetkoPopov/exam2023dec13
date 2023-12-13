const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const userModel = mongoose.Schema({
    username: String,
    email:  String,
    password:  String,
})
userModel.virtual("repeat_password").set(function (value) {
    console.log(`${value} --- ${this.password}`);
    if (value !== this.password) {
        throw new mongoose.MongooseError("Password missmatch!");
    }
});

userModel.pre("save", async function () {
    console.log("PRE");
    const hash = await bcrypt.hash(this.password, 7);
    this.password = hash;
});

const User = mongoose.model('users', userModel)

module.exports = User