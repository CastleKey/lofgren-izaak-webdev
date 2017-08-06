/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

        function LoginController($location, UserService) {
            var model = this;

            model.login = function (username, password) {

                //var found = UserService.findUserByCredentials(username, password);

                console.log("Hello World");
                UserService
                    .findUserByCredentials(username, password)
                    .then(login, handleSomeError);

                function handleSomeError(error) {
                    model.message = "Username and password pair not found, please try again";
                }


                function login(found) {
                    if(found !== null) {
                        $location.url('/user/' + found._id);
                        // $scope.message = "Welcome " + username;
                    } else {
                        model.message = "Username and password pair not found, please try again";
                    }
                }
            };
        }

})();
