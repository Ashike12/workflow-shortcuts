/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />
(function (angular){
    "use strict"

    function constructor($scope, dataService){

        var vm = $scope;
        vm.searchBy = "All";
        vm.employeeList = [];
        vm.isDataAvailable = false;
        dataService.getData("Assets/data.json").then(function success(response){        
            vm.employeeList = response;
            if(vm.employeeList!="Not Found"){
                vm.isDataAvailable = true;
            }
        })
        
    }
    constructor.$inject = ['$scope', 'dataService'];
    app.controller('sampleListController', constructor);
})(window.angular)

