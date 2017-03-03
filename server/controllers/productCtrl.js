var db = require('./../massive');


module.exports = {

    getProducts: function(req, res) {
        db.product.read_products([], function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results)
            }
        })
    },
    getBrand: function(req, res) {
        db.product.read_brand([req.params.brandName],
        function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results)
            }
        })
    },
    getOneProduct: function(req, res) {
        db.product.read_product([req.params.productid],
        function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results[0])
            }
        })
    },
    getSearchQuery: function(req, res) {
        db.product.search_product(['%' + req.params.searchTerm + '%'],
        function(err, results) {
            if (err) {
                console.error(err)
                res.send(err)
            } else {
                res.send(results)
            }
        })
    }

}