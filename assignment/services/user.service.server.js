var app = require('../../express');
var userModel = require('../model/user/user.model.server');

app.get     ('/api/assignment/user/:userId', findUserById);
app.get     ('/api/assignment/user', findUserByCredentials);
app.get     ('/api/assignment2/user', findUserByUsername);
app.post    ('/api/assignment/user', createUser);
app.put     ('/api/assignment/user/:userId', updateUser);
app.delete  ('/api/assignment/user/:userId', deleteUser);

var users = [
    {_id: "123", username: "alice",     password: "alice",
        firstName: "Alice",     lastName: "Wonder", email: "alice@web.com"},
    {_id: "234", username: "bob",       password: "bob",
        firstName: "Bob",       lastName: "Marley", email: "bob@web.com"},
    {_id: "345", username: "charly",    password: "charly",
        firstName: "Charly",    lastName: "Garcia", email: "charly@web.com"},
    {_id: "456", username: "jannunzi",  password: "jannunzi",
        firstName: "Jose",      lastName: "Annunzi",email: "jannunzi@web.com"}
];

function deleteUser(req, res) {
    var userId = req.params.userId;

    userModel
        .deleteUser(userId)
        .then(function (status) {
            res.sendStatus(200);
        });
    // var user = users.find(function (user) {
    //     return user._id === userId;
    // });
    // var index = users.indexOf(user);
    // users.splice(index, 1);
    // res.sendStatus(200);
}

function updateUser(req, res) {
    var user = req.body;
    var userId = req.params['userId'];

    userModel
        .updateUser(userId, user)
        .then(function (user) {
            res.sendStatus(200);
        }, function (err) {
            res.sendStatus(404);
        });
    // for(var u in users) {
    //     if(userId === users[u]._id) {
    //         users[u] = user;
    //         res.sendStatus(200);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}

function createUser(req, res) {
    var user = req.body;
    userModel
        .createUser(user)
        .then(function (user) {
            res.json(user);
        });

    // user._id = (new Date()).getTime() + "";
    // users.push(user);
    // res.send(user);
}

function findUserById(req, res) {
    var userId = req.params['userId'];

    userModel
        .findUserById(userId)
        .then(function (user) {
            res.json(user);
        })
    // var user = users.find(function (user) {
    //     return user._id === userId;
    // });
    // res.send(user);
}

function findUserByCredentials(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];

    userModel
        .findUserByCredentials(username, password)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.sendStatus(404);
        });
    // for(var u in users) {
    //     var user = users[u];
    //     if( user.username === username &&
    //         user.password === password) {
    //         res.json(user);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}

function findUserByUsername(req, res) {
    var username = req.query['username'];
    userModel
        .findUserByUsername(username)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.sendStatus(404);
        });
    // for(var u in users) {
    //     var user = users[u];
    //     if( user.username === username ) {
    //         res.json(user);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}

