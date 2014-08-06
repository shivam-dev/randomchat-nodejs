var user = require("./user"), usersh = require('../schema/usersh.js');

module.exports = function(app) {
	
	app.get('/', function(req, resp){
		/*		
		usersh.find().setOptions({}).exec(function(err, docs){
			if(err){
				console.log(err);
			}
			else {
				console.log(docs);
			}

		});
		*/
		
		resp.cookie('userinfo', 'random chat', { maxAge: 900000, httpOnly: true });
		if(req.session.name != undefined)
	        	console.log("username : "+req.session.name)
		if(req.session.pass != undefined)
			console.log("password : "+req.session.pass);
		//resp.end("i am in default page");
		resp.render('index', { title: 'Random chat service', user: { name: req.session.name }});
		//resp.redirect("Default.html");
	});

	home = function(req, resp){
		if(req.session.uname !== undefined)
        		resp.end(req.session.uname + " is logged ");
		else 
			resp.redirect("/");

	};

	app.get('/new', user.new_user);
	app.get('/home', this.home);
	app.all('/login', user.login);
	app.get('/logout', user.logout);
};
