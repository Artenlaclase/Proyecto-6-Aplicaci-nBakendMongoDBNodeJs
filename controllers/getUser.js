
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json({ users });
    } catch (error) {
        res.status(500).json({
            msg: "Error al obtener los usuarios",
            error: error.message
        });
    }
};