const Village = require('../models/village.model');
const httpStatusCode = require('../../utils/httpStatusCode');

const getAllVillages = async (req, res, next ) => {
    try {
        if (req.query.page) {
            const page = parseInt(req.query.page);
            const skip = (page - 1) * 20;
            const allVillages = await Village.find().populate().skip(skip).limit(20);
            return res.json({
                status: 200,
                message: httpStatusCode[200],
                data: { villages: allVillages }
            })
        } else {
            const allVillages = await Village.find();
            return res.json({
                status: 200,
                message: httpStatusCode[200],
                data: { villages: allVillages },
            });
        }
    } catch (error) {
        return next(error);
    }
}

const getVillageById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const villageById = await Village.findById(id);
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: {village: villageById}
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAllVillages,
    getVillageById
}