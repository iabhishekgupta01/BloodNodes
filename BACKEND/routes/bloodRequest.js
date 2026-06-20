const express= require('express');
const router=express.Router();
const bloodRequestController=require('../controllers/bloodRequestController.js');
const { authenticateToken, isHospital } = require('../middleware/Middleware.js');
const { uploadForBloodRequest } = require('../config/cloudinary.js');


router.route('/').get( authenticateToken ,bloodRequestController.getAllBloodRequests);
router.route('/').post( authenticateToken,isHospital, uploadForBloodRequest.single('image') ,bloodRequestController.createBloodRequest);
router.route('/:requestId').get( authenticateToken ,bloodRequestController.getBloodRequestById);
router.route('/:requestId').put( authenticateToken ,uploadForBloodRequest.single('image'),bloodRequestController.updateBloodRequest);
router.route('/:requestId').delete( authenticateToken, isHospital ,bloodRequestController.deleteBloodRequest);

module.exports=router;

