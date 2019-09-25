module.exports = function () {

  this.getNoticias = function(connection, callback) {
    connection.query('select * from noticias', callback);
  }
  this.getNoticia = function(connection, callback) {
    connection.query('select * from noticias where id_noticia = 2', callback);
  }
  this.salvarNoticia = function(noticia, connection, callback){
    connection.query('insert into noticias set ?',noticia)
    //Neste caso é fundamental que o JSON possua como rótulo das variáveis o mesmo nome que as colunas 
    //da tabela
  }
  return this;
}
