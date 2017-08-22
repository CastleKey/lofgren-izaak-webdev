/**
 * Created by izaaklofgren on 5/30/17.
 */

(function () {
    angular
        .module('WebAppMaker')
        .factory('PageService', PageService);
    function PageService($http) {

        // var pages = [
        //         { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
        //         { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
        //         { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
        //     ];

        var api = {
            "createPage": createPage,
            "findPagesByWebsiteId": findPagesByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };

        return api;

        function createPage(websiteId, page) {
            var url = '/api/assignment/website/' + websiteId + '/page';
            return $http.post(url, page)
                .then(function (response) {
                    return response.data;
                });

            // page._id = (new Date()).getTime() + "";
            // page.created = new Date();
            // page.updated = new Date();
            // page.websiteId = websiteId;
            // pages.push(page);
        }

        function findPagesByWebsiteId(websiteId) {
            var url = "/api/assignment/website/" + websiteId + "/page";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

            // var resultSet = [];
            // for(var p in pages) {
            //     if(pages[p].websiteId === websiteId) {
            //         resultSet.push(pages[p]);
            //     }
            // }
            // return resultSet;
        }

        function findPageById(pageId) {
            var url = "/api/assignment/page/" + pageId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
            // return pages.find(function (page) {
            //     return page._id === pageId;
            // });
        }

        function updatePage(pageId, page) {
            var url = "/api/assignment/page/" + pageId;
            return $http.put(url, page)
                .then(function (response) {
                    return response.data;
                });
            // for(var p in pages) {
            //     if(pages[p]._id === pageId) {
            //         pages[p] = page;
            //     }
            // }
        }

        function deletePage(pageId) {
            var url = "/api/assignment/page/" + pageId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
            // var page = pages.find(function (page) {
            //     return page._id === pageId;
            // });
            // var index = pages.indexOf(page);
            // pages.splice(index, 1);
        }

    }
})();