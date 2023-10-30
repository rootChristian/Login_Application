/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const TokenModel = require('../models/tokenModel');

//Generator token
const tokenGenerator = asyncHandler(async (user) => {
    try {
        expires_access = process.env.EXPIRES_IN_TOKEN_ACCESS;
        expires_refresh = process.env.EXPIRES_IN_TOKEN_REFRESH;
        const payload = { _id: user._id, username: user.username, role: user.role };

        // Create a access token
        const accessToken = jwt.sign(
            payload,
            process.env.SECRET_TOKEN_KEY,
            { expiresIn: expires_access }
        );
        // Create a refresh token
        const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_KEY,
            { expiresIn: expires_refresh }
        );

        const userToken = await TokenModel.findOne({ userId: user._id });

        if (userToken) {
            const data = { userId: userToken.userId, token: refreshToken };
            await TokenModel.findByIdAndUpdate(userToken._id, data, { new: true });
        } else {
            await new TokenModel({ userId: user._id, token: refreshToken }).save();
        }

        return Promise.resolve({ accessToken, refreshToken });
    } catch (err) {
        return Promise.reject(err);
    }
});

module.exports = { tokenGenerator };
