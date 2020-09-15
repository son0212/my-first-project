const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const listSessionId = require('../models/model.sessionId.js');

router.get('/',async (req,res)=>{
	if(!req.cookies.sessionId){
		res.redirect('/');
	}
	const data = await jwt.verify(req.cookies.sessionId,process.env.jwt);
	const mySessionId = await listSessionId.findOne({_id:data.id,os:data.os,ip:data.ip,browser:data.browser});
	res.render('index',{information:mySessionId});
});

router.get('/one',async (req,res)=>{
	if(!req.cookies.sessionId){
		res.redirect('/one');
	}
	const data = await jwt.verify(req.cookies.sessionId,process.env.jwt);
	const mySessionId = await listSessionId.findOne({_id:data.id,os:data.os,ip:data.ip,browser:data.browser});
	res.render('one',{information:mySessionId});
});

module.exports = router;
