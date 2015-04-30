// require( './db' );

var express = require('express'),
    app     = express(),
    env     = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config  = require('./server/config/config')[env];

require('./server/config/express')(app, config, express);

require('./server/config/handlebars')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/routes')(app);

app.listen(config.port);
console.log('listening on port' + config.port);


// var express     =   require('express'),
//     exphbs      =   require('express-handlebars'),
//     app         =   express();



// var hbs = exphbs.create({
//   defaultLayout: 'main'
// });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars'); 

// app.use(express.static(__dirname));

// app.get('/', function (req, res) {
//   res.render('home');
// });

// app.set('port', process.env.PORT || 3000);

// app.listen(3000);





