/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)

        function LoginController($location, UserService) {
            var model = this;

            model.login = function (username, password) {

                var found = UserService.findUserByCredentials(username, password);

                function loginTwo(found) {
                    if(found !== null) {
                        $location.url('/user/' + found._id);
                        // $scope.message = "Welcome " + username;
                    } else {
                        model.message = "Username and password pair not found, please try again";
                    }
                }

                loginTwo(found);
            };
        }

})();
