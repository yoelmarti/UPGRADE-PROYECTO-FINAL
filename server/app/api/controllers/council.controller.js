const Council = require('../models/Council.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const httpStatusCode = require('../../utils/httpStatusCode');
const { ROLE } = require('../../middlewares/auth.middleware');
// const { validationResult } = require('express-validator');

//Registro de ayuntamiento
const registerCouncil = async (req, res, next) => {
    try {
        const newCouncil = new Council({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: ROLE.COUNCIL,
            village: req.body.village
        });

        const councilDb = await newCouncil.save();
        res.json({
            status: 201,
            message: httpStatusCode[201],
            data: null,
        })
    } catch (error) {
        next(error);
    }
};

const loginCouncil = async (req, res, next) => {
    try {
        const councilInfo = await Council.findOne({ email: req.body.email })
        if (!councilInfo) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }
        if (bcrypt.compareSync(req.body.password, councilInfo.password)) {
            councilInfo.password = null;
            const token = jwt.sign(
                {
                    id: councilInfo._id,
                    email: councilInfo.email,
                    role: councilInfo.role
                },
                req.app.get("secretKey"),
                {
                    expiresIn: 3600000,
                }
            );
            res.status(200).json({

                expiresIn: 3600000,
                data: {
                    council: councilInfo,
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
}

const logoutCouncil = (req, res, next) => {
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


const getCouncilProfile = async (req, res, next) => {
    try {
        const councilId = req.params.id;
        const council = await Council.findById(councilId);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: {
                councilId: council._id,
                name: council.name,
                email: council.email,
                village: council.village,
            }
        })
    } catch (error) {
        return next(error);
    }
}

const updateCouncilData = async (req, res, next) => {
    try {
        const councilId = req.params.id;
        const council = await Council.findByIdAndUpdate(councilId, {
            $set: req.body
        }, { new: true });
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: "Council successfully updated"
        })
    } catch (error) {
        return next(error);
    }
}




module.exports = {
    registerCouncil,
    loginCouncil,
    logoutCouncil,
    getCouncilProfile,
    updateCouncilData,
}