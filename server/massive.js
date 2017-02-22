var massive = require('massive');
var connectionString = "postgres://postgres:postgres@localhost/back-country";
var massiveInstance = massive.connectSync({connectionString : connectionString});
module.exports = massiveInstance;