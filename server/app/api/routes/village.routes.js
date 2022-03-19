const express = require('express');
const router = express.Router();
const { isAuth, authRole } = require('../../middlewares/auth.middleware');
const {
    getAllVillages, 
    getVillageById,
    getHousesByVillage
} = require('../controllers/village.controller');

router.get('/', getAllVillages);
router.get('/:id', [isAuth], getVillageById);
router.get('/:id/houses', [isAuth], getHousesByVillage);


module.exports = router;    