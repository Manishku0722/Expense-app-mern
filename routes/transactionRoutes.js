const express = require('express');
const { addTransection, getAllTransection, editTransection, deleteTransection } = require('../controllers/transectionCtrl');

//router object
const router = express.Router();

//route
//add transection POST Method
router.post('/add-transection', addTransection)

//Edit transection POST Method
router.post('/edit-transection', editTransection)

//Delete transection POST MEthod
router.post("/delete-transection", deleteTransection);


//get transection
router.post('/get-transection', getAllTransection)

module.exports = router;