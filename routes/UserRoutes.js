const express = require('express');
const auth = require('../middleware/authorization');
const { createUser, login, verifiToken } = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/register', createUser);

userRoute.post('/login', login)

userRoute.get('/verifitoken', auth, verifiToken)

module.exports = userRoute;