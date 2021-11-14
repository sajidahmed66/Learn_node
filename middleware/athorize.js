const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    //get the token from the header
    // Authorization: Bearer <token>
    let token = req.header('Authorization');
    if (!token) return res.status(401).send("Unauthorized,Access denied");
    token = token.split(" ")[1].trim();
    //verify the token
    try {
        let decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(400).send("Invalid token");
    }
};