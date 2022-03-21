const jwt = require('jsonwebtoken');
const httpStatusCode = require('../utils/httpStatusCode');
const User = require('../api/models/user.model');

const ROLE = {
    USER: 'user',
    COUNCIL: 'council'
}

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
    authRole,
    ROLE
}