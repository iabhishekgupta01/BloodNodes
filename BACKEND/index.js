const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user.js');
const bloodRequestRoutes = require('./routes/bloodRequest.js');
const donationCampRoutes = require('./routes/donationCamp.js');
const hospitalRoutes = require('./routes/hospital.js');



const ExpressError = require('./utils/ExpressError');
const app = express();
const port = process.env.PORT || 5000; 
const frontend_url = process.env.FRONTEND_URL || "http://localhost:3000";
const db_url = process.env.DB_URL;



mongoose.connect(db_url)
    .then(() =>{
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });

        
    } )
    .catch(err => console.error('Could not connect to MongoDB: ', err));

const corsOptions = {
    origin: frontend_url,
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use((req,res,next)=>{
  console.log(`${req.method} : ${req.url}`);
  next();
});


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blood-requests', bloodRequestRoutes);
app.use('/api/donation-camps', donationCampRoutes);
app.use('/api/hospitals', hospitalRoutes);



app.get('/', (req, res) => {
    res.send('Welcome to the Blood Donation API');
}); 

// app.all("*",(req,res,next)=>{
//     next(new ExpressError(404,"Page not found...!"));
// });

app.use((err,req,res,next)=>{
    const {statusCode=500}=err;
    if(!err.message) err.message="Something went wrong...!";
    res.status(statusCode).json({error:err.message});
});