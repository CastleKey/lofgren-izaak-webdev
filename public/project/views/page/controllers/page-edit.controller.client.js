/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController)

        function PageEditController($routeParams, PageService) {
            var model = this;
            model.pageId = $routeParams['pid'];
            model.userId = $routeParams['uid'];
            model.websiteId = $routeParams['wid'];
            model.updatePage = updatePage;
            model.deletePage = deletePage;

            PageService
                .findPagesByWebsiteId(model.websiteId)
                .then(renderPages);

            function renderPages (pages) {
                model.pages = pages;
            }

            PageService
                .findPageById(model.pageId)
                .then(renderPage);

            function renderPage (page) {
                model.page = page;
            }

            function updatePage(page) {
                PageService.updatePage(model.pageId, page);
            }

            function deletePage() {
                PageService.deletePage(model.pageId);
            }

            // function init() {
            //     var found = PageService.findPagesByWebsiteId(model.websiteId);
            //     model.pages = found;
            //     model.page = PageService.findPageById(model.pageId);
            // }
            // init();
        }

})();
