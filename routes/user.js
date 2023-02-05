const express = require('express');
const { createUser, signInUser } = require('../controllers/user.signup');
const { check } = require('express-validator');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middlewares/validations/user');
const { isAuth } = require('../middlewares/auth');
const { createEmp, empList, updateEmp, deleteEmp, getEmp } = require('../controllers/emp.list');

const router = express.Router()

router.post("/api/create-user", validateUserSignUp, userValidation, createUser)
router.post("/api/sign-in", validateUserSignIn, signInUser)

router.get("/api/emp-list", empList)
router.get("/api/emp/:id", getEmp)

router.post("/api/create-emp", createEmp)
router.put("/api/update-emp", updateEmp)
router.post("/api/delete-emp", deleteEmp)
module.exports = router;
