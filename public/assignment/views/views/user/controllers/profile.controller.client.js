/**
 * Created by izaaklofgren on 5/30/17.
 */

(function () {
    angular
        .module('WebAppMaker')
        .controller('ProfileController', ProfileController);

    function ProfileController($location, $routeParams, UserService) {

        var model = this;
        model.userId = $routeParams["uid"];
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        UserService
            .findUserById(model.userId)
            .then(renderUser);

        function renderUser (user) {
            model.user = user;
        }
        
        function updateUser(user) {
            UserService
                .updateUser(user._id, user)
                .then(function () {
                    model.message = "User Updated Successfully";
                });
            
        }

        function deleteUser(user) {
            UserService
                .deleteUser(user._id)
                .then(function () {
                    $location.url('/login');
                });
        }

    }
})();