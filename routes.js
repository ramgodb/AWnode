var sql = require('./mssql');

module.exports = function(app){
	// index page 
	app.get('/', function(req, res) {
	    var jobs = [
	        { name : 'USER DUMP', lastRun : '2017-06-07 00:12:12', runStatus : 'Success', statusDetails : '77885566' },
	        { name : 'ACCOUNT DUMP', lastRun : '2017-06-07 00:12:12', runStatus : 'Success', statusDetails : '77885566' },
	        { name : 'ACCOUNT HOLDINGS DUMP', lastRun : '2017-06-07 00:12:12', runStatus : 'Success', statusDetails : '77885566' }
	    ];

	    res.render('pages/index', {
	        jobs: jobs
	    });
	});

	app.get('/dbtest', function(req, res) {
		res.write('Processing query...');
		console.log('begin...');
		var result = sql.query('SELECT * FROM M_ACCOUNT');
		console.log('completed...');
		res.write('result');
		res.end();
	});
}