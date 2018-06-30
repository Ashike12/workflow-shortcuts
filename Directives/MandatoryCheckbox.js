(function (angular){

    "use strict"

    function constructor(){
        var directive = {
            scope: {
                loadMore: "&"
            },
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link (scope, element, attrs){
            var noOfChildren = element.children();
            var models = [];
            _.forEach(noOfChildren, function(value) {
                models.push(value.attributes[1].value);
            });
        }
    }

    app.directive('makemandatory', constructor);
})(window.angular)