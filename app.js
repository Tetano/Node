var app = require('./config/server')

var rotaNoticias = require("./app/routes/noticias")//(app); // assim retorna execução da função
rotaNoticias(app); // assim retorna a função + execução.

var rotaHome = require("./app/routes/home")(app);


var rotaFormInclusaoNoticia = require("./app/routes/furmulario_inclusao_noticia")(app);



app.listen(3000, function(){
    console.log("Servidor ON");
});