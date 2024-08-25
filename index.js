const express = require('express');
const {handleLogin, handleSignup, handleProfile, handleLogout} = require('./auth/auth.js');
const { connectToDB } = require('./connect.js')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const serverless = require('serverless-http');


const app = express()
app.use(cookieParser())
app.use(express.json());

app.use(cors({
    origin: 'https://codepulse-frontend.onrender.com',
    methods: ['GET', 'POST'],
    credentials: true
}))

app.post('/signup', handleSignup)
app.post('/login', handleLogin)
app.get('/profile', handleProfile)
app.post('/logout', handleLogout);

connectToDB().then(() => {
    // Start the server only if the database connection is successful
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }).catch(error => {
    console.error('Failed to connect to the database:', error);
  });
  

  module.exports.handler = serverless(app);
