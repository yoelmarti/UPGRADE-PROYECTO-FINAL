const express = require('express');
const router = express.Router();
const { isAuth, authRole, ROLE } = require('../../middlewares/auth.middleware');
const {
    getAllVillages, 
    getVillageById,
    getHousesByVillage
} = require('../controllers/village.controller');


router.get('/', getAllVillages);

//router.get('/:id', [isAuth], getVillageById);
//router.get('/:id/houses', [isAuth], getHousesByVillage);

router.get('/:id', getVillageById);
router.get('/:id/houses', isAuth, authRole(ROLE.USER), getHousesByVillage);

module.exports = router;