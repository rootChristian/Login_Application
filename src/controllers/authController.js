/***********************************************************************
 ************ Author:    Christian KEMGANG NGUESSOP *********************
 ************ Version:    1.0.0                      ********************
 ***********************************************************************/
const UserModel = require("../models/userModel");
const TokenModel = require("../models/tokenModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const session = require("express-session");
const {
    signInBodyValidation,
    refreshTokenBodyValidation,
} = require("../middleware/validationSchema");
const { tokenGenerator } = require("../middleware/generateToken");
const verifyRefreshToken = require("../middleware/verifyRefreshToken");

// Middleware to verify if user exist
module.exports.verifyUser = asyncHandler(async (req, res, next) => {
    try {
        const { username } = req.method === "GET" ? req.query : req.body;

        let exitUser = await UserModel.findOne({ username });
        if (!exitUser)
            return res
                .status(401)
                .send({ error: true, message: "Can't find User!" });
        next();
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ error: true, message: "Internal Server Error" });
    }
});

// Login user
module.exports.login = asyncHandler(async (req, res) => {
    try {
        expires_max_age = 12 * 60 * 60 * 1000;
        const { error } = signInBodyValidation(req.body);
        if (error)
            return res
                .status(400)
                .json({ error: true, message: error.details[0].message });

        const { username, email, password } = req.body;
        const user = await UserModel.findOne(
            username ? { username } : { email }
        ).exec();

        if (!user || !user.active) {
            return res
                .status(401)
                .json({ error: true, message: "Unauthorized!" });
        }

        const hashPwd = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET_PASSWORD
        );

        const originPassword = hashPwd.toString(CryptoJS.enc.Utf8);
        if (originPassword !== password) {
            return res
                .status(401)
                .send({ error: true, message: "Wrong credentials!" });
        }

        const { accessToken, refreshToken } = await tokenGenerator(user);

        // Create and save a secure cookie with refresh token
        res.cookie("jwt", refreshToken, {
            httpOnly: true, //accessible only by web server
            secure: false, //http
            sameSite: "None", //cross-site cookie
            maxAge: expires_max_age //cookie expiry after 12h
        });

        res.status(200).json({
            error: false,
            username: user.username,
            role: user.role,
            accessToken,
            refreshToken,
            message: "Login successfully...",
        });
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ error: true, message: "Internal Server Error" });
    }
});

// Refresh token to get the new access token
module.exports.refreshToken = asyncHandler(async (req, res) => {
    try {
        /*
        const cookies = req.cookies;
        if (!cookies?.jwt)
            return res.sendStatus(204); //No content

        const refreshToken = cookies.jwt;
        */
        expires_access = process.env.EXPIRES_IN_TOKEN_ACCESS;

        const { error } = refreshTokenBodyValidation(req.body);
        if (error)
            return res
                .status(401)
                .json({ error: true, message: error.details[0].message });

        const { refreshToken } = req.body;

        verifyRefreshToken(refreshToken)
            .then(({ tokenDetails }) => {
                const payload = {
                    _id: tokenDetails._id,
                    username: tokenDetails.username,
                    role: tokenDetails.role,
                };
                // Create a new access token
                const accessToken = jwt.sign(
                    payload,
                    process.env.SECRET_TOKEN_KEY,
                    { expiresIn: expires_access }
                );

                res.status(200).json({
                    error: false,
                    username: tokenDetails.username,
                    role: tokenDetails.role,
                    accessToken,
                    refreshToken,
                    message: "Access token created successfully...",
                });
            })
            .catch((err) =>
                res.status(403).json({
                    error: true,
                    message: "Access token unsuccessfully created!",
                })
            );
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ error: true, message: "Internal Server Error" });
    }
});

// User clear cookie if exists
module.exports.logout = asyncHandler(async (req, res) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt)
            return res.sendStatus(204); //No content

        const refreshToken = cookies.jwt;
        //console.log("COOKIES: ", refreshToken)

        const foundToken = await TokenModel.findOne({ token: refreshToken }).exec();

        if (!foundToken) {
            res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
            return res.sendStatus(204); //No content
        }

        await foundToken.deleteOne();
        console.log("Logged out successfully");

        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: true
        });

        res.status(200).json({ message: "Logged out successfully" });
        //res.redirect('/');

    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ error: true, message: "Internal Server Error" });
    }
});