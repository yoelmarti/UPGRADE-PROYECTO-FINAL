const express = require('express');
const router = express.Router();
const { isAuth, authRole } = require('../../middlewares/auth.middleware');
const { ROLE } = require('../../middlewares/auth.middleware');
// const { check, validationResult } = require('express-validator');

const {
    // registerCouncil,
    loginCouncil,
    logoutCouncil,
    getCouncilProfile,
    updateCouncilData
} = require('../controllers/Council.controller');


// router.post('/register', registerCouncil);

router.post('/login', loginCouncil);
router.post('/logout', isAuth, logoutCouncil);
router.get('/:id/profile', isAuth, authRole(ROLE.COUNCIL), getCouncilProfile);
router.put('/update-council/:id', isAuth, authRole(ROLE.COUNCIL), updateCouncilData);

module.exports = router;