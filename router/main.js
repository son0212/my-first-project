const express = require('express');
const router = express.Router();

const listSessionId = require('../models/model.sessionId.js');

router.get('/',async (req,res)=>{
	var mySessionId = await listSessionId.findOne({id:req.cookies.sessionId});
	res.render('index',{information:mySessionId});
});

router.get('/one',async (req,res)=>{
	var mySessionId = await listSessionId.findOne({id:req.cookies.sessionId});
	res.render('one',{information:mySessionId});
});

module.exports = router;