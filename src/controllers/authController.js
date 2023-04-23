/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
const UserModel = require('../models/userModel');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const session = require('express-session');
const { signInBodyValidation } = require('../middleware/validationSchema');
const { tokenGenerator } = require('../middleware/generateToken');


// Middleware to verify if user exist
module.exports.verifyUser = asyncHandler(async (req, res, next) => {
    try {
        const { username } = req.method === "GET" ? req.query : req.body;

        let exitUser = await UserModel.findOne({ username });
        if (!exitUser)
            return res.status(404).send({ error: true, message: "Can't find User!" });
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

module.exports.login = asyncHandler(async (req, res) => {
    try {
        const { error } = signInBodyValidation(req.body);
        if (error)
            return res.status(400).json({ error: true, message: error.details[0].message });

        const { username, email, password } = req.body
        const user = await UserModel.findOne(username ? { username } : { email }).exec();

        if (!user || !user.active) {
            return res.status(401).json({ error: true, message: 'Unauthorized!' });
        }

        const hashPwd = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET_PASSWORD
        );

        const originPassword = hashPwd.toString(CryptoJS.enc.Utf8);
        if (originPassword !== password) {
            return res.status(401).send({ error: true, message: 'Wrong credentials!' });
        }

        const { accessToken, refreshToken } = await tokenGenerator(user);

        res.status(200).json({ error: false, status: "Login Successful..."/*, message: accessToken*/ });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

// User login and generate a token and cookie
module.exports.LOGIN = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body

    if ((!email && !username)) {
        return res.status(400).json({ message: 'Username or email is required!' });
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required!' });
    }

    const user = await UserModel.findOne(username ? { username } : { email }).exec();
    //req.session.user = user;

    if (!user || !user.active) {
        return res.status(401).json({ message: 'Unauthorized!' });
    }

    const hashPwd = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET_PASSWORD
    );

    const originPassword = hashPwd.toString(CryptoJS.enc.Utf8);

    if (originPassword !== password) {
        return res.status(401).send({ message: 'Wrong credentials!' });
    }

    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "userId": user._id,
                "username": user.username,
                "role": user.role
            }
        },
        process.env.SECRET_TOKEN_KEY,
        { expiresIn: '15m' }
    );
    /*
        const refreshToken = jwt.sign(
            { "username": user.username },
            process.env.REFRESH_TOKEN,
            { expiresIn: '7d' }
        )
    
        // Create and save a secure cookie with refresh token
        res.cookie('jwt', refreshToken, {
            httpOnly: true, //accessible only by web server 
            secure: false, //http
            sameSite: 'None', //cross-site cookie 
            maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry after 7 days
        })
    */
    // Save session on redis
    ////req.session.user = user
    // Send accessToken containing username and roles 
    //res.json({ accessToken });
    res.status(200).json({ status: "Login Successful...", message: accessToken });
});

/*
// Refresh token because access token has expired
module.exports.refresh = (req, res) => {
    const cookies = req.cookies
    //console.log("COOK: ", cookies)

    if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized!' })

    const refreshToken = cookies.jwt
    //console.log("COOKIES: ", refreshToken)

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN,
        asyncHandler(async (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden!' });

            const foundUser = await User.findOne({ username: decoded.username }).exec();

            if (!foundUser) return res.status(401).json({ message: 'Unauthorized!' });

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": foundUser.username,
                        "roles": foundUser.roles
                    }
                },
                process.env.ACCESS_TOKEN,
                { expiresIn: '15m' }
            )

            res.json({ accessToken });
        })
    )
};

// User clear cookie if exists
module.exports.logout = (req, res) => {

    const cookies = req.cookies
    //console.log('COOKIES: ', cookies?.jwt)

    if (!cookies?.jwt) return res.sendStatus(204) //No content

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.status(200).json({ message: 'Cookie cleared' })
    //res.redirect('/');
};
*/