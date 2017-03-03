var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config');

var stripe = require('stripe')(config.STRIPE_KEYS.secretKey);

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

// stripe
app.post('/api/payment', function(req, res, next) {
    console.log(req.body);

    const chargeAmt = req.body.amount;
    const amountArray = chargeAmt.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
        if(amountArray[i] === '.') {
            if (typeof amountArray[i + 1] === 'string') {
                pennies.push(amountArray[i + 1]);
            } else {
                pennies.push('0');
            }
            if (typeof amountArray[i + 2] === 'string') {
                pennies.push(amountArray[i + 2]);
            } else {
                pennies.push('0');
            }
                break;
        } else {
            pennies.push(amountArray[i])
        }
    }
    const convertedAmt = parseInt(pennies.join(''));
    console.log('Pennies: ');
    console.log(convertedAmt);

    const charge = stripe.charges.create({
        amount: convertedAmt,
        currency: 'usd',
        source: req.body.payment.token,
        description: 'Test charge'
    }, function(err, charge) {
        res.sendStatus(200);
    })
})

var productCtrl = require('./controllers/productCtrl');
var userCtrl = require('./controllers/userCtrl');
var orderCtrl = require('./controllers/orderCtrl');

app.get('/api/me', userCtrl.me);
app.put('/api/user/current', isAuthed, userCtrl.update);

app.put('/api/order/complete', orderCtrl.complete)
app.get('/api/order', orderCtrl.read);
app.post('/api/order/add', orderCtrl.addToCart);
app.put('/api/order/update/:id', orderCtrl.updateItemInCart);
app.delete('/api/order/delete/:id', orderCtrl.deleteFromCart);
app.get('/api/checkout/:id', orderCtrl.checkout);

app.get('/api/products', productCtrl.getProducts)
app.get('/api/brands/:brandName', productCtrl.getBrand)
app.get('/api/products/:productid', productCtrl.getOneProduct)
app.get('/api/search/:searchTerm', productCtrl.getSearchQuery)






var port = 2700;
app.listen(port, function() {
    console.log('listening on port ' + port);
});

