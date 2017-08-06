/**
 * Created by izaaklofgren on 5/30/17.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService, $sce) {
        var model = this;
        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        WidgetService
            .findWidgetsByPageId(model.pageId)
            .then(renderWidgets);

        function renderWidgets (widgets) {
            model.widgets = widgets;
        }

        // function init() {
        //     model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
        //     //model.user = UserService.findUserById(model.userId);
        // }
        //
        // init();

        model.trustThisContent = trustThisContent;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        model.getWidgetUrlForType = getWidgetUrlForType;

        function getWidgetUrlForType(type) {
            return 'views/widget/templates/widget-' + type.toLowerCase() + '.view.client.html';
        }

        function getYouTubeEmbedUrl(youTubeLink) {
            var linky = youTubeLink.replace("watch?v=", "embed/");
            console.log(linky);
            return $sce.trustAsResourceUrl(linky);
            //https://www.youtube.com/embed/AM2Ivdi9c4E
        }

        function trustThisContent(html) {
            // diligence to scrub any unsafe content
            return $sce.trustAsHtml(html);
        }
    }

})();