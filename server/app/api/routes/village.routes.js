const express = require('express');
const router = express.Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const {
    getAllVillages, 
    getVillageById,
    getHousesByVillage
} = require('../controllers/village.controller');

router.get('/', getAllVillages);
router.get('/:id', getVillageById);
router.get('/:id/houses', getHousesByVillage);


module.exports = router;