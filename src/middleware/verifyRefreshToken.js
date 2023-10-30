/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const TokenModel = require('../models/tokenModel');

const verifyRefreshToken = asyncHandler(async (refreshToken) => {
    try {
        const privateKey = process.env.REFRESH_TOKEN_KEY;

        const userToken = await TokenModel.findOne({ token: refreshToken });

        if (!userToken) return console.log({ error: true, message: "Invalid refresh token!", });

        const tokenDetails = await jwt.verify(refreshToken, privateKey);
        return Promise.resolve({
            tokenDetails,
            error: false,
            message: "Valid refresh token...",
        });
    } catch (err) {
        return Promise.reject(err);
    }
});

module.exports = verifyRefreshToken
