const express= require('express');
const router=express.Router();
const hospitalController=require('../controllers/hospitalController.js');
const {authenticateToken, isHospital}=require('../middleware/Middleware.js');
const {generateResponse} = require('../middleware/generativeAi.js');
const multer = require('multer');

// use memory storage so file buffer is available at req.file.buffer
const storage = multer.memoryStorage();
const upload = multer({
  storage,
});

router.route('/').get(hospitalController.getAllHospitals);
router.route('/:id').get(authenticateToken, hospitalController.getHospitalById);
router.route('/profile').put(authenticateToken,isHospital, hospitalController.updateHospital);
router.put('/inventory', authenticateToken, isHospital, hospitalController.updateInventory);
// router.put('/inventory/ai-scan', authenticateToken, isHospital, upload.single('image'), generateResponse, hospitalController.inventoryScan);


module.exports=router;




