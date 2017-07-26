/**
 * Created by izaaklofgren on 5/30/17.
 */


(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)

        function WebsiteListController($routeParams, WebsiteService, UserService) {
            var model = this;
            model.userId = $routeParams["uid"];

            function init() {
                var found = WebsiteService.findWebsitesByUser(model.userId);
                model.websites = found;
                model.user = UserService.findUserById(model.userId);
            }
            init();
        }

})();