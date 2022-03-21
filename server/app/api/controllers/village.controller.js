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
            const allVillages = await Village.find().populate('houses');
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
            data: { village: villageById }
        })
    } catch (error) {
        return next(error);
    }
}

const getHousesByVillage = async (req, res, next) => {
    try {
        const {id} = req. params;
        if(req.query.page) {
            const page = parseInt(req.query.page);
            const skip = (page - 1) * 20;
            const allHousesByVillage = await Village.find({_id: id}).skip(skip).limit(20).populate("houses");
            return res.json({
                status: 200,
                message: httpStatusCode[200],
                data: { info: allHousesByVillage },
            });
        }
        else{
            const allHousesByVillage = await Village.find({_id: id}).populate("houses");
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: { info: allHousesByVillage },
        });
        }
    } catch (error) {
        
    }
}

const updateVillageData = async (req, res, next) => {
    try {
        const villageId = req.params.id;
        const village = await Village.findByIdAndUpdate( villageId, {
            $set: req.body
        }, {new:true});
        return res.json({
            status: 200,
            message: httpStatusCode[200],
            data: "Village successfully updated"
        })
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    getAllVillages,
    getVillageById,
    getHousesByVillage,
    updateVillageData
}