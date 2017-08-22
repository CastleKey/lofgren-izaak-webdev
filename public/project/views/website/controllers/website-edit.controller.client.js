/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController)

        function WebsiteEditController($routeParams, WebsiteService) {
            var model = this;
            model.websiteId = $routeParams['wid'];
            model.userId = $routeParams['uid'];
            model.updateWebsite = updateWebsite;
            model.deleteWebsite = deleteWebsite;

            WebsiteService
                .findWebsitesByUser(model.userId)
                .then(renderWebsites);

            function renderWebsites (websites) {
                model.websites = websites;
            }

            WebsiteService
                .findWebsiteById(model.websiteId)
                .then(renderWebsite);

            function renderWebsite (website) {
                model.website = website;

            }

            function updateWebsite(website) {
                WebsiteService.updateWebsite(model.websiteId, website);
            }

            function deleteWebsite() {
                WebsiteService.deleteWebsite(model.userId, model.websiteId);
            }

            // function init() {
            //     var found = WebsiteService.findWebsitesByUser(model.userId);
            //     model.websites = found;
            //     model.website = WebsiteService.findWebsiteById(model.websiteId);
            //     console.log(model.website.name);
            // }
            // init();
        }

})();