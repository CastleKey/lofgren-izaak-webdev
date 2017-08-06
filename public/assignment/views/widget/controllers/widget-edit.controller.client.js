/**
 * Created by izaaklofgren on 5/30/17.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController);

        function WidgetEditController($routeParams, WidgetService) {
            var model = this;
            model.widgetId = $routeParams['wgid'];
            model.userId = $routeParams['uid'];
            model.pageId = $routeParams['pid'];
            model.websiteId = $routeParams['wid'];
            model.updateWidget = updateWidget;
            model.deleteWidget = deleteWidget;

            function updateWidget(widget) {
                WidgetService.updateWidget(model.widgetId, widget);
            }

            function deleteWidget() {
                WidgetService.deleteWidget(model.widgetId);
            }

            WidgetService
                .findWidgetsByPageId(model.pageId)
                .then(renderWidgets);

            function renderWidgets (widgets) {
                model.widgets = widgets;
            }

            WidgetService
                .findWidgetById(model.widgetId)
                .then(renderWidget);

            function renderWidget (widget) {
                model.widget = widget;
            }

            // function init() {
            //     model.widget = WidgetService.findWidgetById(model.widgetId);
            //     model.widgets = WidgetService.findWidgetsByPageId(model.pageId);
            // }
            // init();
        }

})();