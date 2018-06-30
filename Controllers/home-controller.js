/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />
(function (angular){
    "use strict"

    function constructor($scope){

        var vm = $scope;
        vm.formData = {};
        vm.models = ["firstName", "middleName", "lastName"]
        vm.labels = ["First Name", "Middle Name", "Last Name"];
        var countryList = {
            "INDIA": "India",
            "BANGLADESH": "Bangladesh",
            "SRI_LANKA": "Sri-Lanka",
            "JAPAN": "Japan",
            "MALYASHIA": "Malyashia",
            "THILAND": "Thiland",
            "U_S_A": "U.S.A"
        };
        vm.types = [1,1,1,countryList];
        vm.placeholders = vm.labels;
    }
    constructor.$inject = ['$scope'];
    app.controller('homeController', constructor);
})(window.angular)
