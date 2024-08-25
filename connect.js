const mongoose = require('mongoose');
require('dotenv').config();  // Make sure to install dotenv if you haven't

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            
        });
        console.log('MongoDB connected');
    } catch (e) {
        console.log('Error connecting to DB', e);
    }
}

module.exports = { connectToDB };
