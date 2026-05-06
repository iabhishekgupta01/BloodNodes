const express= require('express');
const router=express.Router();
const authController=require('../controllers/authController.js');

const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");


router.route('/register-user').post(authController.registerUser);

router.route('/login').post(authController.login);
router.route('/register-hospital').post(authController.registerHospital);

router.route('/logout').post(authController.logoutUser);

module.exports=router;


