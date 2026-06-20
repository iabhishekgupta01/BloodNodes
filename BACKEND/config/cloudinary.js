const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage2 = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'blood_requests', 
        allowed_formats: ['jpg', 'jpeg', 'png']
    }
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'donation_camps', 
        allowed_formats: ['jpg', 'jpeg', 'png']
    }
});

const upload = multer({ storage: storage });
const uploadForBloodRequest = multer({ storage: storage2 });

module.exports = { upload, uploadForBloodRequest };
