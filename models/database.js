const pg = require('pg');
const connectionstring = 'postgres://139.162.84.23:5432/wechat_public_account';

const client = new pg.Client(connectionstring);
client.connect(
	function(err){
		if(err){
			return console.error('could not connect to postgres',err);
		};

		//drop existing table
		console.log('Dropping table \'person\'');
		var query = client.query('drop table if exists person');
		query.on('end',function(){
			console.log('Dropped!');
		})

		//create table
		console.log('Creating table \'person\'');
		var query = client.query('create table person(id serial, username varchar(10), password varchar(10), age integer)');
		query.on('end',function(){
			console.log('Created!');
		})

	}
);