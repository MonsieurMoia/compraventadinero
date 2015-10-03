//Paths

var paths = function(app){

  //Pass a Path and a View to this function to create Express Routes

  var renderPathView = function(path,view){
    app.get(path, function(req, res){
      res.render(view,{ nombre : "Su mama"});
    });
  }

  var localQuery = function(req, res) {
    // console.log(JSON.stringify(a.body));
    // console.log(JSON.stringify(b.body));
    res.locals.data = req.params;
    // console.log(res.locals);
  };

  //Usage of Paths and their Views,
  //Views are in the Views Folder on Root

  renderPathView( "/" , "index" );
  renderPathView( "/login" , "login" );

  //The 404 Route (ALWAYS Keep this as the last route)

  app.get('*', function(req, res){
    res.status(404).render('not-found', localQuery(req,res));
  });

};

module.exports = paths;
