var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user: "root",
  password: "password",
  database: "newDB practice",
});

connection.connect();



// connection.query(`update Movie_list1 set Hero = 'Mahesh Babu' where Director = 'Puri'`, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

connection.query(`select Hero from Movie_list1 where Director = 'Puri'`, function (error, results, fields) {
   if (error) throw error;
   console.log(results);
 });

connection.query(`Delete from Movie_list2 where Heroin = 'Kajal'`, function (error, results, fields) {
  if (error) throw error;
});

connection.query(`select * from Movie_list2`, function (error, results, fields) {
  if (error) throw error;
  console.table( results);
});

connection.query(`select * from Movie_list1 where Music = "DSP"`, function (error, results, fields) {
  if (error) throw error;
  console.table( results);
});

connection.end();
