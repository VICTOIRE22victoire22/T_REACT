const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'dsnfjkldsf128321houiew1qbe15691#@$*^&%#';

class UserController {

    async register(req, res) {
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10)
        }

        const user = await User.create(data);

        res.json(user);
    }

    async login(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });

            if (!user) {
                throw new Error;
            }

            const match = await bcrypt.compare(req.body.password, user.password);
            if (!match) {
                throw new Error;
            }
            const token = jwt.sign({ id: user._id }, JWT_SECRET, {
                expiresIn: 86400 // 86400 secondes = 24h
            });

            // Le httpOnly bloque l'acces au token coté javascript a part dans les requetes fetch
            return res.cookie('token', token, { httpOnly: true }).json(user);
        } catch {
            return res.status(404).json("Les informations sont incorrect.");
        }
    }

    async getLoggedUser(req, res) {
        const { userId } = req;

        const user = await User.findById(userId);

        res.json(user);
    }
}

module.exports = new UserController();