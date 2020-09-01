const listSessionId = require('../models/model.sessionId.js');

module.exports = async (req,res,next)=>{
	if(!req.cookies.sessionId){
		var sessionId = await listSessionId.findOne({
			ip:req.ip,
			os:req.useragent.os,
			browser:req.useragent.browser
		});
		if(sessionId){
			res.cookie('sessionId',sessionId._id);
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
			res.cookie('sessionId',mySessionId._id);
		}
	}
	next();
};
