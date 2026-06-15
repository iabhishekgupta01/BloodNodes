const express=require('express');
const router=express.Router();
const donationCampController=require('../controllers/donationCampController.js');
const { authenticateToken, isHospital } = require('../middleware/Middleware.js');
const upload = require('../config/cloudinary.js');

router.route('/').get(donationCampController.getAllDonationCamps);
router.route('/').post(authenticateToken, isHospital,upload.single('image'), donationCampController.createDonationCamp);
router.route('/:campId').get(donationCampController.getDonationCampById);
router.route('/:campId').put(authenticateToken, isHospital, upload.single('image'), donationCampController.updateDonationCamp);
router.route('/:campId').delete(authenticateToken, isHospital, donationCampController.deleteDonationCamp);

module.exports=router;