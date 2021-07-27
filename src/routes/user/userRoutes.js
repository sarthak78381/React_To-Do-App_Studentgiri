const express = require('express');

const auth = require('../../middlewares/auth');
const { getUserData, createUser, logInToUser, logOutFromUser} = require('./userRoutesFunctions');

const router = express.Router();



router.post('/users/signup', auth, createUser);

router.post('/users/login', auth, logInToUser) 

router.get('/users/signout', auth, logOutFromUser) 

router.get('/users/me', auth, getUserData)




module.exports = router;