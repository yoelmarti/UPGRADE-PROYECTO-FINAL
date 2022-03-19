const express = require('express');
const router = express.Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const {
    getAllHouses,
    getHouseById,
    addHouseToUser
} = require('../controllers/house.controller');

router.get('/', [isAuth], getAllHouses);
router.get('/:id', [isAuth], getHouseById);
router.patch('/:id/add', [isAuth], addHouseToUser);

module.exports = router;