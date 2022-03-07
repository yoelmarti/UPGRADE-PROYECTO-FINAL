const express = require('express');
const router = express.Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const {
    getAllHouses,
    getHouseById,
    addHouseToUser
} = require('../controllers/house.controller');

router.get('/', getAllHouses);
router.get('/:id', getHouseById);
router.patch('/:id/add', [isAuth], addHouseToUser);

module.exports = router;