/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />

(function (angular){

    "use strict"

    function constructor($parse){
        var htmlTemplate;
        var directive = {
            scope: {
                placeholders: "=placeholders",
                labels: "=labels",
                models: "=models",
                types: "=types"
            },
            link: link,
            restrict: 'EA',
            template: '<h1></h1>'
        };
        return directive;

        function link(scope, attrs, element){
            htmlTemplate = "<h1>";
            _.forEach(scope.labels, function(val) {
                htmlTemplate+= val;
            });
            debugger;
            htmlTemplate+= "</h1>";
            directive.template = htmlTemplate;
        }
    }

    app.directive('inputgroup', constructor);
})(window.angular)