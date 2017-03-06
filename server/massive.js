var massive = require('massive');
var connectionString = "postgres://postgres:postgres@localhost/back-country";
// var connectionString = 'postgres://bokvtqru:nI7-9twmr52TNM5HMMbBR0ISoBU7Y7i-@babar.elephantsql.com:5432/bokvtqru'
var massiveInstance = massive.connectSync({connectionString : connectionString});
module.exports = massiveInstance;