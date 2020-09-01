const express = require('express');
const router = express.Router();
require('dotenv').config();

const listSessionId = require('../models/model.sessionId.js');

router.get('/',async (req,res)=>{
	var data = await jwt.verify(req.cookies.sessionId,process.env.jwt);
	var mySessionId = await listSessionId.findOne(data});
	res.render('index',{information:mySessionId});
});

router.get('/one',async (req,res)=>{
	var data = await jwt.verify(req.cookies.sessionId,process.env.jwt);
	var mySessionId = await listSessionId.findOne({id:data});
	res.render('one',{information:mySessionId});
});

module.exports = router;
