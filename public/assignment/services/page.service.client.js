/**
 * Created by izaaklofgren on 5/30/17.
 */

(function () {
    angular
        .module('WebAppMaker')
        .factory('PageService', PageService);
    function PageService() {

        var pages = [
                { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
                { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
                { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
            ];

        var api = {
            "createPage": createPage,
            "findPagesByWebsiteId": findPagesByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };

        return api;

        function createPage(websiteId, page) {
            page._id = (new Date()).getTime() + "";
            page.created = new Date();
            page.updated = new Date();
            page.websiteId = websiteId;
            pages.push(page);
        }

        function findPagesByWebsiteId(websiteId) {
            var resultSet = [];
            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    resultSet.push(pages[p]);
                }
            }
            return resultSet;
        }

        function findPageById(pageId) {
            return pages.find(function (page) {
                return page._id === pageId;
            });
        }

        function updatePage(pageId, page) {
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    pages[p] = page;
                }
            }
        }

        function deletePage(pageId) {
            var page = pages.find(function (page) {
                return page._id === pageId;
            });
            var index = pages.indexOf(page);
            pages.splice(index, 1);
        }

    }
})();