/**
 * Created by izaaklofgren on 5/30/17.
 */


(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)

        function WebsiteListController($routeParams, WebsiteService) {
            var model = this;
            model.userId = $routeParams["uid"];

            WebsiteService
                .findWebsitesByUser(model.userId)
                .then(renderWebsites);

            function renderWebsites (websites) {
                model.websites = websites;
            }

        }
})();