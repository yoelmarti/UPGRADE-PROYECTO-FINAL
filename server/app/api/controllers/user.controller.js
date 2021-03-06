const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const httpStatusCode = require('../../utils/httpStatusCode');
const { ROLE } = require('../../middlewares/roles.middleware');
const { validationResult } = require('express-validator');

//Registro de usuario
const registerUser = async (req, res, next) => {
    try {
        const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
            return `[${param}]: ${msg}`;
          };
          const result = validationResult(req).formatWith(errorFormatter);
          if (!result.isEmpty()) {
            return res.status(422).json({ errors: result.array() });
          }

        const userAvatar = req.file ? req.file.filename : null;
        // const newUser = new User();
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.avatar = userAvatar;
        newUser.children = req.body.children;
        newUser.birthDate = req.body.birthDate;
        newUser.profession = req.body.profession;
        newUser.role = ROLE.USER;

        const userDb = await newUser.save();
        res.json({
            status: 201,
            message: httpStatusCode[201],
            data: null,
        })
    } catch (error) {
        next(error);
    }
};


const loginUser = async (req, res, next) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email })
        if (!userInfo) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null;
            const token = jwt.sign(
                {
                    id: userInfo._id,
                    email: userInfo.email,
                    role: userInfo.role
                },
                req.app.get("secretKey"),
                {
                    expiresIn: 10000,
                }
            );
            res.status(200).json({

                expiresIn: 10000,
                data: {
                    user: userInfo,
                    token: token
                }
            })
        } else {
            return res.json({
                status: 400,
                message: httpStatusCode[400],
                data: null,
            })
        }
    } catch (error) {
        next(error)
    }
};

const logoutUser = (req, res, next) => {
    try {
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            token: null,
        });
    } catch (error) {
        next(error)
    }
};

const getUserProfile = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: {
                userId: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                avatar: user.avatar,
                children: user.children,
                birthdate: user.birthDate,
                profession: user.profession,
                role: user.role,
                houses: user.houses,
            }
        })
    } catch (error) {
        return next(error);
    }
};

const updateUserData = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndUpdate(userId, {
            $set: req.body
        }, { new: true });
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: "User successfully updated"
        })
    } catch (error) {
        return next(error);
    }
};


const deleteUser = async (req, res, next) => {
    try {
        console.log("req.authority", req.authority);
        const userId = req.params.id;
        const authority = req.authority.id;
        const userFound = await User.findById(userId);

        if (authority === (userFound._id).toString()) {
            const userDeleted = await User.findByIdAndDelete(userId);
            res.json({
                status: 200,
                message: "User succesfully deleted",
                data: { deletedUser: userDeleted }
            })
        }
        else {
            return res.json({
                status: 400,
                message: "Unable to delete user"
            })
        }

    } catch (error) {
    return next(error)
    }
}



module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserData,
    deleteUser
}