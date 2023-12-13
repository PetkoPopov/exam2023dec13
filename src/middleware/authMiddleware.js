const jwt = require("../lib/jwt.js");
const { SECRET } = require("../constants/constants.js");

exports.auth = async (req, res, next) => {
    const token = req.cookies["auth"];
    // next()
    if (token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;

            next();
        } catch (error) {
            console.log({ error });
            res.clearCookie("auth");
            res.redirect("/user/login");
        }
    } else {
        next();
    }
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect("/user/login");
    }

    next();
};
