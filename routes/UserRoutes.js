const express = require('express');
const auth = require('../middleware/authorization');
const { createUser, login, verifyToken } = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/register', createUser);

userRoute.post('/login', login);

userRoute.get('/verifytoken', auth, verifyToken);

module.exports = userRoute;