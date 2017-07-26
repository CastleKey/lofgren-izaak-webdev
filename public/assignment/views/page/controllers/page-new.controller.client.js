/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController)

        function PageNewController($routeParams, PageService) {
            var model = this;
            model.userId = $routeParams["uid"];
            model.websiteId = $routeParams["wid"];
            model.createPage = createPage;

            function createPage(name, description) {
                var page = {
                    name: name,
                    description: description
                }
                PageService.createPage(model.websiteId, page);
            }

            function init() {
                model.pages = PageService.findPagesByWebsiteId(model.websiteId);
            }
            init();
        }

})();