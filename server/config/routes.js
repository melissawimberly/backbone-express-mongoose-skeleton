module.exports = function(app, express){
  var router        =   express.Router(),
      userRoutes    =   require('../routes/users'),
      calorieRoutes =   require('../routes/calories');

  router.use(function(req, res, next) {
    // log stuff here u want
    next();
  });

  router.get('/', function(req, res) {
    res.json({ message: 'api is working' }); 
  });

  app.use('/api', router);

};