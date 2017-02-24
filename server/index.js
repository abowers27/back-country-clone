var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');


var config = require('./config');

var app = module.exports = express();

app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());

var db = require('./massive');

var passport = require('./services/passport');
app.use(session({
    secret: config.secret,
    saveUninitialized: false,
    resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: '/#!/',
    failureRedirect: '/#!/'
}));

app.get('/api/logout', function(req, res, next) {
    req.logout();
    return res.status(200).send('logged out');
})

var isAuthed = function(req, res, next) {
    if (!req.isAuthenticated()) return res.status(401).send();
    return next();
}

var productCtrl = require('./controllers/productCtrl');
var userCtrl = require('./controllers/userCtrl');
var orderCtrl = require('./controllers/orderCtrl');

app.get('/api/me', userCtrl.me);
app.put('/api/user/current', isAuthed, userCtrl.update);

app.get('/api/products', productCtrl.getProducts)

app.get('/api/brands/:brandName', productCtrl.getBrand)

app.get('/api/products/:productid', productCtrl.getOneProduct)






var port = 2700;
app.listen(port, function() {
    console.log('listening on port ' + port);
});

