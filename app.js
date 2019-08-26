var express = require('express');
var app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/',function(req,res){
    res.render("home/index.ejs")
});
app.get('/formulario_inclusao_noticia',function(req,res){
    res.render("admin/form_add_noticia.ejs")
});
app.get('/noticias',function(req,res){
    res.render("noticias/noticias")
});
app.listen(3000, function(){
    console.log("Teste ")
});