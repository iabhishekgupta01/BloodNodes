const express= require('express');
const router=express.Router();
const userController=require('../controllers/userController.js');
const {authenticateToken}=require('../middleware/Middleware.js');

router.route('/').get(userController.getAllUsers);
router.route('/:id').get(authenticateToken, userController.getUserById);
router.route('/:id').put(authenticateToken,userController.updateUser);

module.exports=router;