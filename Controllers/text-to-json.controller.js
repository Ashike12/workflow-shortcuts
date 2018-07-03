/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />
(function (){

    "use strict"

    function constructor($scope, $anchorScroll, $location, $mdMedia, dataService){

        var vm = $scope;
        vm.jsonFile = "";
        vm.$mdMedia = $mdMedia;
    
        function convertToJson(){
            debugger;
            vm.jsonFile = dataService.convertTextToJson(vm.textInput, vm.isDuplicateKeyAllowed);
        }
    
        function srcollTo(scrollLocation){
            $location.hash(scrollLocation);
            $anchorScroll();
        }
    
        vm.convertToJson = convertToJson;
        vm.srcollTo = srcollTo;
    }
    constructor.inject = ["$scope", "$anchorScroll", "$location", "$mdMedia", "dataService"];
    app.controller('textToJsonController', constructor);

})()

