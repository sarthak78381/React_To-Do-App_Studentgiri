const User = require('../../models/user');

const createUser = async (req, res) => {
    try {
        if (req.user) return res.status(300).json({...req.user});
        const new_User = new User(req.body);
        let token = await new_User.generateAuthToken();
        res.cookie('userToken', token, { maxAge: 60000 * 60 * 24})
        return res.status(201).json({...new_User._doc});
    } catch(error) {
        res.status(400);
        res.json({error: error.message});
    }
}

const getUserData = async (req, res) => {
    if (req.user) {
        return res.send(req.user);
    }
}


const logInToUser = async (req, res) => {
    try {
        if (req.user) return res.status(300).json({...req.user});
        let user = await User.findByCredentials(req.body.userName, req.body.password);
        let token = await user.generateAuthToken();
        res.cookie('userToken', token, { maxAge: 60000 * 60 * 24})
        return res.send({...user._doc});
    } catch(error) {
        return res.status(400).send({error: error.message});
    }
}

const logOutFromUser = async (req, res) => {
    try {
        let {user, userToken} = req;
        if (user) {
            user.tokens = user.tokens.filter(eToken => !eToken === userToken);
            await user.save();
            return res.status(200).json({status: 200});
        }
    } catch(error) {
        return res.status(400).send(error.message);
    }
}


module.exports = {
    getUserData,
    createUser,
    logInToUser,
    logOutFromUser,
}