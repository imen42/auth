const express = require ('express');
const { register, login, auth } = require('../controller/user.controller');
const { registerRules,validator } = require('../middlewares/validator');
const verifyAuth = require('../middlewares/VerifyAuth');
const router = express.Router()


router.post('/register',registerRules(),register,validator);
router.post('/login',login);
router.get('/auth',verifyAuth,auth)

module.exports = router;