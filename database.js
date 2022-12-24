const mysql= require('mysql');
const connection=mysql.createConnection({
	host:'sql.freedb.tech',
	database:'freedb_FirstDb',
	user:'freedb_abc123',
	password:'eRq*w7D@zb6xFgf'
})

connection.connect(function(error){
	if(error){
		throw Error;
	}
	else{
		console.log('My sql database is connected');
	}
});

module.exports=connection;