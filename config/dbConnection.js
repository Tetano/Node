var mysql = require('mysql');

var connMySQL = function(){ // Evita que dentro de um auto-load a função seja executada
                            // Quando for requisitada apenas ela será executada
    console.log("conexão estabelescida")
return mysql.createConnection({
    
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'portal_noticias'
});
}
module.exports = function(){ 
    console.log("Carregando connMySQL - Variavel que carrega função do BD")
    return connMySQL;
}