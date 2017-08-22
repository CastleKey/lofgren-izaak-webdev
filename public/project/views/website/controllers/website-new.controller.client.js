/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController)

        function WebsiteNewController($routeParams, $location, WebsiteService) {
            var model = this;
            model.userId = $routeParams['uid'];

            WebsiteService
                .findWebsitesByUser(model.userId)
                .then(renderWebsites);

            function renderWebsites (websites) {
                model.websites = websites;
            }

            model.createWebsite = createWebsite;

            function createWebsite(name, description) {
                var website = {
                    name: name,
                    description: description,
                    developerId: model.userId
                };
                WebsiteService
                    .createWebsite(model.userId, website)
                    .then(function (website) {
                        $location.url('/user/' + model.userId + '/website');
                    });
            }



            // model.createWebsite = createWebsite;
            //
            // function createWebsite(websiteName, websiteDescription) {
            //     var website = {
            //         name: websiteName,
            //         description: websiteDescription
            //     }
            //     WebsiteService.createWebsite(model.userId, website);
            //     $location.url('/user/' + model.userId + '/website');
            // }
            //
            // function init() {
            //     var found = WebsiteService.findWebsitesByUser(model.userId);
            //     model.websites = found;
            // }
            // init();

        }

})();