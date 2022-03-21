const express = require('express');
const router = express.Router();
const { isAuth, authRole, ROLE } = require('../../middlewares/auth.middleware');
const {
    getAllVillages, 
    getVillageById,
    getHousesByVillage,
    updateVillageData
} = require('../controllers/village.controller');


router.get('/', getAllVillages);

//router.get('/:id', [isAuth], getVillageById);
//router.get('/:id/houses', [isAuth], getHousesByVillage);

router.get('/:id', getVillageById);
router.get('/:id/houses', /*[isAuth],*/ /*authRole(ROLE.USER),*/ getHousesByVillage);
router.put('/update-village/:id', authRole(ROLE.USER), updateVillageData)

module.exports = router;