/**
 * Created by izaaklofgren on 5/30/17.
 */

(function () {
    angular
        .module('WebAppMaker')
        .controller('RegisterController', RegisterController);

    function RegisterController($location, UserService) {

        var model = this;

        // event handlers
        model.register = register;

        // implementation
        function register(username, password, password2) {

            if (password !== password2) {
                model.error = "Passwords must match";
                return;
            }

            var found = UserService.findUserByUsername(username);

            if (found == username) {
                model.error = "Username is not available";
            } else {
                var user = {
                    username: username,
                    password: password
                };
                UserService
                    .createUser(user)
                    .then(function (user) {
                        $location.url('/user/' + user._id);
                    });
            }
        }
    }
})();