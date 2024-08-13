const User = require('../models/userModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt);
        const respuestaDB = await User.create({
            username,
            email,
            password: hashedPassword
        });

        return res.json(respuestaDB);

    } catch (error) {
        return res.status(400).json({
            msg: error.menssage
        });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        let foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({ msg: " Username no existe" });
        }
        const correctPass = await bcryptjs.compare(password, foundUser.password);
        if (!correctPass) {
            return res.status(400).json({ msg: "El username o password no son correctos" });
        }

        const payload = { user: { id: foundUser.id } }
        jwt.sign(
            payload,
            process.env.SECRET,
            { expiresIn: 3600 },
            (error, token) => {
                if (error) throw error;
                res.json({ token });
            });
    } catch (error) {
        res.status(500).json({
            msg: "Hay un error", error: error.message
        });
    }
};

exports.verifyToken = async (req, res) => {
    try {
        const foundUser = await User.findById(req.user.id).select('-password')
        res.json({ foundUser });
    } catch (error) {
        res.status(500).json({
            msg: "Hay un error",
            error: error.message
        });
    }
};

