const express= require('express');
const router=express.Router();
const bloodRequestController=require('../controllers/bloodRequestController.js');


router.route('/').get(bloodRequestController.getAllBloodRequests);
router.route('/').post(bloodRequestController.createBloodRequest);
router.route('/:requestId').get(bloodRequestController.getBloodRequestById);
router.route('/:requestId').put(bloodRequestController.updateBloodRequest);
router.route('/:requestId').delete(bloodRequestController.deleteBloodRequest);

module.exports=router;

