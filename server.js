const express = require('express');
const connectDB = require('./config/connectDB');
const user = require('./routes/user');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
app.use(express.json());
app.use('/api/courses', courseRoutes);
app.use(express.json());
app.use('/user',user);
connectDB();
app.listen(8000, (err) => 
err ? console.log(err) : console.log("Server is running on port 8000")
);
