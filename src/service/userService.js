const bcrypt = require('bcrypt')

const User = require('../models/userModel.js')
const jwt = require('../lib/jwt.js')
const { SECRET } = require('../constants/constants.js')

exports.create = async ({ username, email, password, repeat_password }) => {
    const user = await User.create({ username , email, password, repeat_password })
    return user
}

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error("Invalid username !");
    }

    // validate password

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error("Invalid username or password!");
    }

    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

    return token;
}
