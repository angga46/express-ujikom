const model = require("../database/models/");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    model.user.findOne({
        where: {
            email: email,
        },
    }).then(function (result) {
        let passwordHash = result.password;
        let checkPassword = bcrypt.compareSync(password, passwordHash);

        if (checkPassword) {
            res.json({
                message: "Berhasil Login",
                token: jwt.sign({ id: result.id }, process.env.JWT_KEY_SECRET, {
                    expiresIn: '1h'
                }),
            });
        } else {
            res.json({
                message: "Gagal Login",
            });
        }
    }).catch(function (error) {
        res.json({ error: error });
    })
}

function register(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    model.user.findOne({
        where: {
            email: email,
        },
    }).then(function (result) {
        if(result) {
            req.json({
                message: "user already exists. Registration failed.",
            });
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10);

            model.user.create({
                name: name,
                email: email,
                password: hashedPassword,
                role: role,
            }).then(function (newUser) {
                res.json({
                    message:"Registration successful",
                    token: jwt.sign({ id: newUser.id }, process.env.JWT_KEY_SECRET, {
                        expiresIn: '1h'
                    }),
                    data: {
                        id: newUser.id,
                        name: newUser.name,
                        email: newUser.email,
                        role: newUser.role
                    }
                });
            }).catch(function (error) {
                res.json({ error: error });
            });
        }
    }).catch(function (error) {
        res.json({ error: error })
    })
}

function logout(req, res) {
    res.json({
        message:"Logout successful",
    });
}

module.exports = {
    login, register, logout
}