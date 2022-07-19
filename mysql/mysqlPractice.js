var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user: "root",
    password: "password",
    database: "newDB practice",
});

connection.connect();



connection.query(`update Movie_list1 set Hero = 'NTR' where Director = 'Puri'`, function (error, results, fields) {
  if (error) throw error;
 // console.log(results);
});

// connection.query(`select * from Movie_list1 where Director = 'Puri'`, function (error, results, fields) {
//    if (error) throw error;
//    console.log('The solution is: ', results);
//  });

connection.query(`select * from Movie_list1 where Director = 'Puri'`, function (error, results, fields) {
  if (error) throw error;
  else if (results[0]='NTR')
  console.log('The solution is: ', results);
});


connection.end();
