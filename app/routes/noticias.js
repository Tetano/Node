
module.exports = function (Application) {

    Application.get('/noticias', function (req, res) {

        var connection = Application.config.dbConnection();
        var noticiasModel = Application.app.noticiasModel;

       // noticiasModel.getNoticias(connection)

        connection.query("SELECT * FROM noticias", function (error, result) {
            res.render("noticias/noticias", { noticias: result });
            //console.log(error) //Descomentar para ver erros do BD
        });
    });
};