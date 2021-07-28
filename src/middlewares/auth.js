const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Cryptr = require('cryptr');

const cryptr = new Cryptr(`${process.env.cryptr_secretkey}`);

const auth = async (req, res, next) => {
    try {
        let encryptedToken = req.cookies.userToken; 
        if (encryptedToken) {
            let token = cryptr.decrypt(encryptedToken);
            const isVerified = jwt.verify(token, `${process.env.jwt_key}`);
            const user = await User.findOne({_id: isVerified._id, "tokens.token": token});
            if (user) {
                req.userToken = token
                req.user = user;
            }
            next(); 
        } else {
            next()
        }
    } catch(error) {
        res.json({error: "fail to authenticate"})
    }
}

module.exports = auth;