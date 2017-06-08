var mssql = module.exports = {};
const sql = require('mssql/msnodesqlv8');

const config = {
    user: 'sa',
    password: 'ganesh',
    server: '192.168.0.169\\SQLEXPRESS,57872', // You can use 'localhost\\instance' to connect to named instance
    port: 57872,
    database: 'PrismWealth',
    stream: true,

    /*options: {
        encrypt: true // Use this if you're on Windows Azure
    }*/
}

mssql.query = function (rawQuery, callback) {
	console.log(rawQuery);

	sql.connect(config, function(err, res) {
	    // ... error checks
	    if(err != null) {
	    	console.dir(err);
	    	sql.close();
	    	callback();
	    } else {
	    	// Query
		    new sql.Request().query(rawQuery, (err, result) => {
		        // ... error checks.
		        if(err != null) {
		        	console.log('error...');
					console.dir(err);
		        } else {
		        	console.log('result...');
		        	console.dir(result);
		        }
		        sql.close();
		    })
	    }
	    
	})

	sql.on('error', function(err, res) {
	    // ... error handler
	    console.log('connection error...');
	})
}