module.exports = function(app){

     app.get('/noticias', function(req,res){
 
         var mysql = require('mysql');
 
         var connection = mysql.createConnection({
             host: 'localhost',
             user: 'root',
             password: '12345',
             database: 'portal_noticias'
         });
 
         connection.query("SELECT * FROM noticias", function(error, result){
             res.render("noticias/noticias",{noticias : result});
             console.log(error)
         });
     });
 }