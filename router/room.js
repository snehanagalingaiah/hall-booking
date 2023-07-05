const express = require('express');
const router =express.Router();
const roomModule = require('../modules/room');

router.get("/getrooms", roomModule.getRoomData);

router.post("/createroom", roomModule.createRoom);

router.post("/bookroom", roomModule.bookRoom);

router.get("/getroombookingdata", roomModule.getRoomBookingData);

router.get("/getallcustomersdata", roomModule.getAllCustomersData);

router.get("/getcustomerinfo/:customerName", roomModule.getcustomerinfo);

module.exports = router;
