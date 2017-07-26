/**
 * Created by izaaklofgren on 5/30/17.
 */

(function () {
    angular
        .module('WebAppMaker')
        .controller('ProfileController', ProfileController);

    function ProfileController($routeParams, UserService) {

        var model = this;
        model.userId = $routeParams["uid"];
        function init() {
            model.user = UserService.findUserById(model.userId);
        }
        init();

    }
})();