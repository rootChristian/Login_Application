/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
const jwt = require('jsonwebtoken');

//Check and verify token
/*module.exports.verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token)
        return res.status(403).send("Access denied. Not authenticated...");
    try {
        const decodeUser = await jwt.verify(token, config.SECRET_TOKEN);
        req.user = decodeUser;
    } catch (err) {
        return res.status(401).send("Invalid Token!");
    }
    return next();
};*/

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(
        token,
        process.env.SECRET_TOKEN,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })
            req.user = decoded.UserInfo.username
            req.roles = decoded.UserInfo.roles
            next()
        }
    )
};

module.exports = verifyToken;