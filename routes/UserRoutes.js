const express = require('express');
const auth = require('../middleware/authorization');
const { createUser, login, verifyToken, updateUser } = require('../controllers/userController');
const { getAllUsers } = require('../controllers/getUser');

const userRoute = express.Router();

userRoute.post('/register', createUser);

userRoute.post('/login', login);

userRoute.get('/verifytoken', auth, verifyToken);

userRoute.put('/update', auth, updateUser);

userRoute.get('/all', getAllUsers);


module.exports = userRoute;