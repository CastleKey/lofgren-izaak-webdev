/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController)

        function PageNewController($routeParams, $location, PageService) {
            var model = this;
            model.userId = $routeParams["uid"];
            model.websiteId = $routeParams["wid"];
            model.createPage = createPage;

            PageService
                .findPagesByWebsiteId(model.websiteId)
                .then(renderPages);

            function renderPages (pages) {
                model.pages = pages;
            }

            function createPage(name, description) {
                var page = {
                    name: name,
                    description: description,
                    websiteId: model.websiteId
                };
                PageService
                    .createPage(model.websiteId, page)
                    .then(function (page) {
                        $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page');
                    });
            }

            // function createPage(name, description) {
            //     var page = {
            //         name: name,
            //         description: description
            //     }
            //     PageService.createPage(model.websiteId, page);
            // }
            //
            // function init() {
            //     model.pages = PageService.findPagesByWebsiteId(model.websiteId);
            // }
            // init();
        }

})();