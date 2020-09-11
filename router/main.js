const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const listSessionId = require('../models/model.sessionId.js');

router.get('/',async (req,res)=>{
	if(!req.cookies.sessionId){
		res.redirect('/');
	}
	var data = await jwt.verify(req.cookies.sessionId,process.env.jwt);
	var mySessionId = await listSessionId.findOne(data});
	res.render('index',{information:mySessionId});
});

router.get('/one',async (req,res)=>{
	if(!req.cookies.sessionId){
		res.redirect('/one');
	}
	var data = await jwt.verify(req.cookies.sessionId,process.env.jwt);
	var mySessionId = await listSessionId.findOne({id:data});
	res.render('one',{information:mySessionId});
});

module.exports = router;
