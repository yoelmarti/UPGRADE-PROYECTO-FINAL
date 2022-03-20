const express = require('express');
const router = express.Router();
//TODO  authMiddleware
const { isAuth, authRole, ROLE } = require('../../middlewares/auth.middleware');
const {upload} = require('../../middlewares/file.middleware');
const { check } = require('express-validator');

const {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserData
} = require('../controllers/user.controller');


router.post('/register', [
    check('name')
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long'),
    check('email', 'Email is required')
        .isEmail()
        .not()
        .isEmpty(),
    check('password', 'Password should be between 8 to 20 characters long')
        .not()
        .isEmpty()
        .isLength({ min: 8, max: 20 })
        //Minimum eight characters, at least one letter, one number and one special character
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        .withMessage('Password must have minimum eight characters, at least one letter, one number and one special character'),        
    check('children')
        .isNumeric()
], [upload.single('avatar')],
registerUser);

router.post('/login', loginUser);
router.post('/logout', isAuth, logoutUser);
router.get('/:id/profile', isAuth, authRole(ROLE.USER), getUserProfile);
router.put('/update-user/:id', isAuth, authRole(ROLE.USER), updateUserData);

module.exports = router;