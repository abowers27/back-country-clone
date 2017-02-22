var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var productCtrl = require('./controllers/productCtrl');

var app = express();

app.use(express.static(__dirname + './../public'));
app.use(bodyParser.json());


app.get('/api/products', productCtrl.getProducts)

app.get('/api/brands/:brandName', productCtrl.getBrand)






var port = 2700;
app.listen(port, function() {
    console.log('listening on port ' + port);
});

