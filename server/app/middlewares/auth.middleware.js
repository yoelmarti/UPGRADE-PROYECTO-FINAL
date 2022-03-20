const jwt = require('jsonwebtoken');
const httpStatusCode = require('../utils/httpStatusCode');
const User = require('../api/models/user.model');
// const Council = require('../api/models/council.model');
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
const authRole = (role) => {
    return (req, res, next) => {
        if(!req.user.role === role){
            res.json({
                status: 401,
                message: "Not allowed"
            })
        }
        next();
    }
}


// const authRole = (roles) => async (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(' ').pop();
//         const tokenData = jwt.verify(token, process.env.SECRET_SESSION);
//         const userData = await User.findById(tokenData.id);
//         // const councilData = await Council.findById(tokenData.id);
//         // console.log(tokenData);
//         if (roles.includes(userData.role)) {
//             next();
//         // } else if(roles.includes(councilData.role)){
            

//         }else {
//             res.json({
//                 status: 409,
//                 message: "No tienes permisos para acceder aquí"
//             })
//         }
//     } catch (error) {
//         res.status(409)
//         next(error);
//     }
// }




module.exports = {
    isAuth,
    authRole,
    ROLE
}