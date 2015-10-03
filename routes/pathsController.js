//Paths

var paths = function(app){

  //Pass a Path and a View to this function to create Express Routes

  var renderPathView = function(path,view){
    app.get(path, function(req, res){
      res.render(view,{ nombre : "Su mama"});
    });
  }

  //Usage of Paths and their Views,
  //Views are in the Views Folder on Root

  renderPathView( "/" , "index" );
  renderPathView( "/login" , "login" );

  //The 404 Route (ALWAYS Keep this as the last route)

  app.get('*', function(req, res){
    res.status(404).render('not-found');
  });

};

module.exports = paths;
