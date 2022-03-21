// require('dotenv').config();
const jwt = require('jsonwebtoken');
const httpStatusCode = require('../utils/httpStatusCode');
const User = require('../api/models/user.model');

const ROLE = {
    USER: 'user',
    COUNCIL: 'council'
}

// Is a user authenticated?
const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.json({
            status: 401,
            message: httpStatusCode[401],
            data: null
        })
    }
    const splits = authorization.split(" ");
    if (splits.length != 2 || splits[0] != "Bearer") {
        return res.json({
            status: 400,
            message: httpStatusCode[400],
            data: null
        })
    }
    const jwtString = splits[1];
    try {
        const token = jwt.verify(jwtString, req.app.get("secretKey"));
        const authority = {
            id: token.id,
            // name: token.name
        };
        req.authority = authority;
    } catch (error) {
        return next(error)
    }

    next();
}

//Is the user authorized?
// const authRole = (role) => {
//     return async (req, res, next) => {
//         const { id } = req.params;
//         const userById = await User.findById(id);
//         if(userById.role !== role){
//             res.json({
//                 status: 401,
//                 message: "Not allowed"
//             })
//         }
//         next();
//     }
// }

//Authorized Roles
const authRole = (roles) => async (req, res, next) => {
    try {
        //////
        // console.log(req.headers); 
        const authorization = req.headers.authorization;
        if (!authorization) {
            return res.json({
                status: 401,
                message: httpStatusCode[401],
                data: null
            })
        }
        ///////

        
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const tokenData = jwt.verify(token, /*app.get("secretKey")*/ process.env.SECRET_SESSION);
        const userData = await User.findById(tokenData.id);

        if (roles.includes(userData.role)) {
            next();            

        }else {
            res.json({
                status: 409,
                message: "No tienes permisos para acceder aquí"
            })
        }
    } catch (error) {
        res.status(409)
        next(error);
    }
}


module.exports = {
    isAuth,
    authRole,
    ROLE
}