var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Goods = require("../models/user");

router.get("/",(req,res,next)=>{
	res.json({
		status:"12",
		msg:"register success"
	})
})

module.exports = router;