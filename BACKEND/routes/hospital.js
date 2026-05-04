const express= require('express');
const router=express.Router();
const hospitalController=require('../controllers/hospitalController.js');
const {authenticateToken, isHospital}=require('../middleware/Middleware.js');

router.route('/').get(hospitalController.getAllHospitals);
router.route('/:id').get(authenticateToken, hospitalController.getHospitalById);
router.route('/profile').put(authenticateToken,isHospital, hospitalController.updateHospital);
router.put('/inventory', authenticateToken, isHospital, hospitalController.updateInventory);
router.post('/inventory/ai-scan', authenticateToken, isHospital, hospitalController.inventoryScan);


module.exports=router;




