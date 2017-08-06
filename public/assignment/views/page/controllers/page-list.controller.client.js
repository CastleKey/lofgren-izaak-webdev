/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)

        function PageListController($routeParams, PageService, WebsiteService, UserService) {

            var model = this;
            model.userId = $routeParams["uid"];
            model.websiteId = $routeParams["wid"];

            PageService
                .findPagesByWebsiteId(model.websiteId)
                .then(renderPages);

            function renderPages (pages) {
                model.pages = pages;
            }

            // function init() {
            //     model.pages = PageService.findPagesByWebsiteId(model.websiteId);
            //     model.website = WebsiteService.findWebsiteById(model.websiteId);
            // }
            // init();

        }
})();