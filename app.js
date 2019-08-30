var app = require('./config/server')

app.listen(3000, function(){
    console.log("Servidor ON");
});
//var rotaNoticias = require("./app/routes/noticias")//(app); // assim retorna execução da função
//rotaNoticias(app); // assim retorna a função + execução.