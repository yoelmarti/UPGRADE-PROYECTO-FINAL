const express = require('express');
const router = express.Router();
const { isAuth } = require('../../middlewares/auth.middleware');
const {
    getAllVillages, 
    getVillageById
} = require('../controllers/village.controller');

router.get('/', getAllVillages);
router.get('/:id', getVillageById);


module.exports = router;