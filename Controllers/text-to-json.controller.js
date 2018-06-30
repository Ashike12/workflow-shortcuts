/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />
(function (){

    "use strict"

    function constructor($scope, $anchorScroll, $location, dataService){

        var vm = $scope;
        vm.jsonFile = "";
    
        function convertToJson(){
            vm.jsonFile = dataService.convertTextToJson(vm.textInput);
        }
    
        function srcollTo(scrollLocation){
            $location.hash(scrollLocation);
            $anchorScroll();
        }
    
        vm.convertToJson = convertToJson;
        vm.srcollTo = srcollTo;
    }
    constructor.inject = ["$scope", "$anchorScroll", "$location", "dataService"];
    app.controller('textToJsonController', constructor);

})()

