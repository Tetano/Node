
module.exports = function (app) {

    app.get('/noticia', function (req, res) {

        var connection = app.config.dbConnection();

        connection.query("SELECT * FROM noticias where id_noticia like 2", function (error, result) {
            res.render("noticias/noticia", { noticia: result });
            console.log(error) //Descomentar para ver erros do BD
        });
    });
};