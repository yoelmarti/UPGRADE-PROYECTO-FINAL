const House = require('../models/house.model');
const User = require('../models/user.model');
const httpStatusCode = require('../../utils/httpStatusCode');

//Get
const getAllHouses = async (req, res, next) => {
    try {
        if (req.query.page) {
            const page = parseInt(req.query.page);
            const skip = (page - 1) * 20;
            const allHouses = await House.find().populate().skip(skip).limit(20);
            return res.json({
                status: 200,
                message: httpStatusCode[200],
                data: { houses: allHouses }
            })
        } else {
            const allHouses = await House.find();
            return res.json({
                status: 200,
                message: httpStatusCode[200],
                data: { houses: allHouses },
            });
        }
    } catch (error) {
        return next(error);
    }
}

//Get
const getHouseById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const houseById = await House.findById(id);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: {house: houseById}
        })
    } catch (error) {
        return next(error);
    }
}

//Patch
const addHouseToUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const authority = req.authority.id;
        console.log(authority);
            const userUpdated = await User.findByIdAndUpdate(authority, {$push: {houses: [id]}}, {new:true});
            return res.json({
                status: 200,
                message: httpStatusCode[200],
                data: { data: userUpdated }   
            });     
       

    } catch (error) {
        return next
    }
}



module.exports = {
    getAllHouses,
    getHouseById,
    addHouseToUser
}