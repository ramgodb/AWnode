const sql = require('mssql');

module.exports = {
	var query = function (sql) {
		try{
			const pool = await sql.connect('mssql://sa:ganesh@192.168.0.169\SQLEXPRESS,57872/PrismWealth');
		}catch(err) {
			console.log(err);
		}
	}
}