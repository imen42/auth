const express = require('express');
const router = express.Router();
const verifyAuth = require('../middlewares/VerifyAuth');
const isAdmin = require('../middlewares/isAdmin');
const { addCourse, deleteCourse } = require('../controller/course.controller');


router.post('/add',isAdmin,addCourse);
router.delete('/delete',isAdmin,deleteCourse);

module.exports = router;