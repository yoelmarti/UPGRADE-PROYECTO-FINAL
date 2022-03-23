const express = require('express');
const router = express.Router();
const { isAuth } = require('../../middlewares/auth.middleware');
// const { authRole, ROLE } = require('../../middlewares/roles.middleware');
const {
    getAllVillages, 
    getVillageById,
    getHousesByVillage,
    updateVillageData
} = require('../controllers/village.controller');


router.get('/', getAllVillages);


router.get('/:id', getVillageById);
router.get('/:id/houses', isAuth, /*authRole(ROLE.USER),*/ getHousesByVillage);

router.put('/update-village/:id', /*authRole(ROLE.COUNCIL),*/ updateVillageData)

module.exports = router;