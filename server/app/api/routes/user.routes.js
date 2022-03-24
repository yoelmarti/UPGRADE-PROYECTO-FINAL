const express = require('express');
const router = express.Router();
const { isAuth } = require('../../middlewares/auth.middleware');

const { authRole, ROLE } = require('../../middlewares/roles.middleware');
const { upload, uploadToCloudinary } = require('../../middlewares/file.middleware');

const { check } = require('express-validator');

const {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserData,
    deleteUser
} = require('../controllers/user.controller');


router.post('/register', 
[
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
        //Password must contain at least one 1 numeric character, 1 lowercase letter, 1 uppercase letter and 1 special character
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
            )
        .withMessage('Password must be at least 8 character long and max 20, contain at least one 1 numeric character, 1 lowercase letter, 1 uppercase letter and 1 special character'),        
    check('children')
        .isNumeric({min: 1, max: 10}),
        
], 
[upload.single('avatar'), uploadToCloudinary],
registerUser);

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/:id/profile', isAuth, /*authRole(ROLE.USER),*/ getUserProfile);


router.delete('/:id/profile/delete', isAuth, /*authRole(ROLE.USER),*/ deleteUser);
router.put('/:id/update-user', isAuth, authRole(ROLE.USER), updateUserData);


module.exports = router;