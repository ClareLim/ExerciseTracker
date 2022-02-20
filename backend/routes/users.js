const router = require('express').Router();
let User = require('../models/user.model');

// first endpoint that handles HTTP get requests on /users URL path, root URL: local host 5001
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// second endpoint that handles HTTP post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;