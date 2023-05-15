const express = require('express');
const connectDB = require('./config/connectDB');
const user = require('./routes/user');
const app = express();
app.use(express.json());
app.use('/user',user);
connectDB();
const PORT = process.env.PORT ||6000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));