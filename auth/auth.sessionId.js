const listSessionId = require('../models/model.sessionId.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req,res,next)=>{
	if(!req.cookies.sessionId){
		var sessionId = await listSessionId.findOne({
			ip:req.ip,
			os:req.useragent.os,
			browser:req.useragent.browser
		});
		if(sessionId){
			var token = await jwt.sign({ip:sessionId.ip,id:sessionId._id,os:sessionId.os,browser:sessionId.browser},process.env.jwt,{algorithm:"HS256"});
			res.cookie('sessionId',token);
		}
		else{
			await listSessionId.create({
				ip:req.ip,
				os:req.useragent.os,
				browser:req.useragent.browser
			});
			var mySessionId = await listSessionId.findOne({
				ip:req.ip,
				os:req.useragent.os,
				browser:req.useragent.browser
			});
			var token = await jwt.sign({ip:mySessionId.ip,id:mySessionId._id,os:mySessionId.os,browser:mySessionId.browser},process.env.jwt,{algorithm:"HS256"});
			res.cookie('sessionId',token);
		}
	}
	next();
};
