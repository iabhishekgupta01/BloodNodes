const express=require('express');
const router=express.Router();
const donationCampController=require('../controllers/donationCampController.js');
const { authenticateToken, isHospital } = require('../middleware/Middleware.js');

router.route('/').get(donationCampController.getAllDonationCamps);
router.route('/').post(authenticateToken, isHospital, donationCampController.createDonationCamp);
router.route('/:campId').get(donationCampController.getDonationCampById);
router.route('/:campId').put(authenticateToken, isHospital, donationCampController.updateDonationCamp);
router.route('/:campId').delete(authenticateToken, isHospital, donationCampController.deleteDonationCamp);

module.exports=router;