var db = require('./../massive');

module.exports = {
    me: function(req, res, next) {
        if (!req.user) {
            console.log('Current user not found');

            return res.status(401).send('Current user not defined');
        }
        return res.status(200).json(req.user);
    },

    update: function(req, res, next) {
        console.log('Starting update');

        var updateUser = req.body;
        updateUser.id = req.user.id;
        db.users.save(updateUser, function(err, user) {
            if (err) {
                console.log('User update error', err);

                return res.status(401).send(err);
            }

            req.user = user;

            res.status(200).json(user);
        })
    }
}