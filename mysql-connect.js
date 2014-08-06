var mysql  = require("mysql");
var connection =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'shivam',
    database: 'testpro'
});

connection.connect(function(err){
		console.log(err);
	});

connection.query("Show tables", function(err, rows){
	 console.log(rows);	
	 if(rows.length < 1){
		connection.query("create table users(id bigint auto_increment primary key, name varchar(80), password varchar(80), email varchar(80))", function(err, rows){

		  if(err){
			console.log(err);
		   }
		});
	  }
	  else {

		var post  = {name: 'Rahul', password: 'sssssssss', email: 'shivamgupta89@gmail.com'};
		var query = connection.query('INSERT INTO users SET ?', post, function(err, result) {
		  // Neat!
			if(err){
			    console.log(err);
			}
			else {
			    console.log(result);
			}
		});
		console.log(query.sql);
		connection.query("select * from users", function(err, docs){
			if(err){

				console.log(err);
			}
			else{
				docs.forEach(function(row){
					console.log("record id: "+row.id);
					console.log(row);
				});

			}
		});	
	}

});

