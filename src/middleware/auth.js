/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const auth = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader?.startsWith('Bearer '))
        return res.status(401).json({ error: true, message: "Access Denied: Token is required for authentication!" });

    const token = authHeader.split(' ')[1];

    try {
        await jwt.verify(
            token,
            process.env.SECRET_TOKEN_KEY,
            (err, decoded) => {
                if (err) return res.status(403).json({ message: `Access Denied: Invalid token! :\n ${err}` })
                req.user = decoded.username;
                req.role = decoded.role;
                ///console.log("Payload: ", decoded);
                next();
            }
        )
        /*const tokenDetails = await jwt.verify(token, process.env.SECRET_TOKEN_KEY);
        req.user = tokenDetails;
        console.log("TOKEN: ", req.user)
        next();*/
    } catch (err) {
        console.log(err);
        res.status(403).json({ error: true, message: "Access Denied: Something wrong!" });
    }
});

module.exports = { auth };
