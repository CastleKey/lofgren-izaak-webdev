/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    function UserService() {

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

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByCredentials": findUserByCredentials,
            "findUserByUsername": findUserByUsername,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };

        return api;

        function createUser(user) {
            user._id = (new Date()).getTime() + "";
            user.firstName = user.username;
            user.lastName = "Filler";
            user.email = user.firstName + "@web.com";
            users.push(user);
        }

        function findUserById(userId) {
            return users.find(function (user) {
                return user._id === userId;
            });
        }


        function findUserByCredentials(username, password) {
            for(var u in users) {
                var user = users[u];
                if(user.username === username && user.password === password) {
                    return user;
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            var user = users.find(function (user) {
                return user.username === username;
            });
            if(typeof user === 'undefined')
                return null;
            return user;
        }

        function updateUser(userId, user) {
            for(var w in users) {
                if(users[w]._id === userId) {
                    users[w] = user;
                }
            }
        }

        function deleteUser(userId) {
            var user = users.find(function (user) {
                return user._id === userId;
            });
            var index = users.indexOf(user);
            users.splice(index, 1);
        }

    }
})();
