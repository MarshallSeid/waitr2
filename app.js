
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var login = require('./routes/login');
var signup = require('./routes/signup');
var food = require('./routes/food');
var drink = require('./routes/drink');
var comingsoon = require('./routes/coming-soon');
var home = require('./routes/home');
var althome = require('./routes/althome');
var profile = require('./routes/profile');
var cartcontent = require('./routes/cartcontent');
var goodys = require('./routes/goodys');
var mandeville = require('./routes/mandeville');
var ovt = require('./routes/ovt');
var sixtyFour = require('./routes/sixtyFour');
var coc = require('./routes/coc');
var perks = require('./routes/perks');
var checkoutsuccess = require('./routes/checkoutsuccess');
var addedtocart = require('./routes/addedtocart');
var altgoodys = require('./routes/altgoodys');
var altfooddrink = require('./routes/altfooddrink');
var countdown = require('./routes/countdown');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', login.view);
app.get('/signup', signup.view);
app.get('/coming-soon', comingsoon.view);
app.get('/food', food.view);
app.get('/drink', drink.view);
app.get('/home', home.view);
app.get('/profile', profile.view);
app.get('/index', index.view);
app.get('/cartcontent', cartcontent.view);
app.get('/goodys', goodys.view);
app.get('/mandeville',mandeville.view);
app.get('/ovt', ovt.view);
app.get('/sixtyFour', sixtyFour.view);
app.get('/coc', coc.view);
app.get('/perks', perks.view);
app.get('/checkoutsuccess', checkoutsuccess.view)
app.get('/addedtocart', addedtocart.view)
app.get('/altgoodys', altgoodys.view)
app.get('/althome', althome.view)
app.get('/altfooddrink', altfooddrink.view)
app.get('/countdown', countdown.view)

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
