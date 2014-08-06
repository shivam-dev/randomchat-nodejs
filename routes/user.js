var mongoose = require('mongoose'),
    Userm = require('../schema/usersh.js');


user = {

	new_user: function(req, res){

		var newu = new Userm({
		  name: 'testing data',
		  password: 'totiiaiia'
		});

		newu.save(function(err, newu) {
		  if (err) return console.error(err);
		  	console.dir(newu);
		});

	},

	login: function(req, res){
		if(req.session.name != undefined){
		   res.redirect("/home");
		}
		var uname = req.body.uname || '';
		var pass = req.body.pass || '';
		Userm.find({$and:[{name:uname }, {password:pass}]}, function(err, data){
		   console.log(data);
		   if(data.length > 0) {
			req.session.name = uname;
			req.session.pass = pass;
			res.redirect("/");
			//res.end(uname + "is logged successfully");
		   }   
		   else {
			res.end("Failed To Login, Please check details again");
		   }
		});
		/*
		if(req.body.username != undefined)
			req.session.name = req.body.username;
		if(req.body.pass != undefined)
			req.session.pass = req.body.pass;
		*/
	},

	
	logout: function(req, res) {
		if(req.session != undefined) {
		      req.session.name = null;
		      req.session.destroy(function(err) {
			 console.log(err);
		      });
		      res.end("logged successfully");
		}
		else {

			res.end("Failed To logout");
		}
	} 
}

module.exports = user;
