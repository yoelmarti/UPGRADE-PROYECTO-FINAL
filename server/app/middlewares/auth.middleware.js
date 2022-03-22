const jwt = require('jsonwebtoken');
const httpStatusCode = require('../utils/httpStatusCode');
const User = require('../api/models/user.model');

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
        const token = jwt.verify(jwtString, process.env.SECRET_SESSION);
        const authority = {
            id: token.id,
            name: token.name
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


module.exports = {
    isAuth
}