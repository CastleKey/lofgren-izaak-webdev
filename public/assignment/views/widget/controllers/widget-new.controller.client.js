/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController", WidgetNewController);

        function WidgetNewController($location, $routeParams, WidgetService) {
            var model = this;
            //model.widgetId = $routeParams['wgid'];
            model.userId = $routeParams['uid'];
            model.pageId = $routeParams['pid'];
            model.websiteId = $routeParams['wid'];
            //model.createWidget = createWidget;
            model.createYoutubeWidget = createYoutubeWidget;
            model.createImageWidget = createImageWidget;
            model.createHeadingWidget = createHeadingWidget;

            function createImageWidget(widgetUrl) {
                var widget = {
                    widgetType: "IMAGE",
                    url: widgetUrl,
                    width: "100%",
                    pageId: model.pageId
                };
                WidgetService
                    .createWidget(model.pageId, widget)
                    .then(function (widget) {
                        $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
                    });
                // WidgetService.createWidget(model.pageId, widget);
            }

            function createHeadingWidget(widgetText, widgetSize) {
                var widget = {
                    widgetType: "HEADING",
                    text: widgetText,
                    size: widgetSize,
                    pageId: model.pageId

                };
                WidgetService
                    .createWidget(model.pageId, widget)
                    .then(function (widget) {
                        $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
                    });
                // WidgetService.createWidget(model.pageId, widget);
            }


            function createYoutubeWidget(widgetUrl) {
                var widget = {
                    widgetType: "YOUTUBE",
                    url: widgetUrl,
                    width: "100%",
                    pageId: model.pageId
                };
                WidgetService
                    .createWidget(model.pageId, widget)
                    .then(function (widget) {
                        $location.url('/user/' + model.userId + '/website/' + model.websiteId + '/page/' + model.pageId + '/widget');
                    });
                // WidgetService.createWidget(model.pageId, widget);
            }

            // function init() {
            //     //model.widget = WidgetService.findWidgetById(model.widgetId);
            // }
            // init();
        }
})();