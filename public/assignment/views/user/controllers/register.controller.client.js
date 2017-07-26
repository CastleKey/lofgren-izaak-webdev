/**
 * Created by izaaklofgren on 5/30/17.
 */

(function () {
    angular
        .module('WebAppMaker')
        .controller('RegisterController', RegisterController);

    function RegisterController($location, UserService) {

        var vm = this;

        // event handlers
        vm.register = register;

        // implementation
        function register(username, password, password2) {

            if(password !== password2) {
                vm.error = "Passwords must match";
                return;
            }

            var found = UserService.findUserByUsername(username);

            if(found !== null) {
                vm.error = "Username is not available";
            } else {
                var user = {
                    username: username,
                    password: password
                };
                // vm.message = user;
                UserService.createUser(user);
                $location.url('/user/' + user._id);
            }
        }
    }
})();