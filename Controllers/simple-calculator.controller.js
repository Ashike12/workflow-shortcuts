/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />
(function (angular){

    "use strict"

    function constructor($scope, $timeout, simpleCalculatorService){

        var vm = $scope;

        vm.message = "Simple Calculator";
        vm.expression = "";
        vm.previousExpression = "";
        vm.isValid = false;
        vm.result = "";
        vm.history = [];
        vm.isShowHistory = false;
        var countOperator = 0;
        
        vm.calculatorButton =  ["C", "GCD", "LCM", "/", "7", "8", "9", "*", "4",
                                    "5", "6", "-", "1", "2", "3", "+", "0", ".", 
                                    "%", "=", "CE"];

        function checkOperator(userInput){
            if(userInput=="+" || userInput=='-' || userInput=='*'||userInput=="/" || userInput=="GCD"||
            userInput=="LCM"||userInput=="%"){
                return true;
            }

            return false;
        }

        function getInputFromUser(userInput){
            if(checkOperator(userInput)){
                vm.expression += userInput;
                countOperator++;
                if(countOperator>1){
                    showToast();
                }
            }
            else if(userInput=="="){
                vm.result = simpleCalculatorService.calculateResult(vm.expression);
                vm.previousExpression = vm.expression;
                vm.history.push(vm.expression+"="+vm.result);
                vm.expression = "";
                countOperator = 0;
            }
            else if(userInput=="CE"){
                vm.expression = vm.expression.slice(0,vm.expression.length-1);
                if(checkOperator(userInput)){
                    countOperator--;
                }
            }
            else if(userInput=="C"){
                vm.expression = "";
                countOperator = 0;
            } else {
                vm.expression += userInput;
            }
            
        }

        function showHistory(){
            if(vm.history.length>0)
                vm.isShowHistory = true;
        }
        function hideHistory(){
            vm.isShowHistory = false;
        }    

        function showToast(){
            while(vm.expression.charAt(vm.expression.length-1)>'9' || vm.expression.charAt(vm.expression.length-1)<'0'){
                vm.expression = vm.expression.slice(0,vm.expression.length-1);
            }
            
            vm.errorMessage = "Only one operator is allowed";
            vm.isValid = true;
            countOperator=1;
            $timeout(function(){
                $scope.isValid = false;
            }, 3000);
        }

        function clearHistory(){
            vm.history = [];
            vm.isShowHistory = false;
        }

        vm.getInputFromUser = getInputFromUser;
        vm.showHistory = showHistory;
        vm.hideHistory = hideHistory;
        vm.clearHistory = clearHistory;
        
        console.log($scope);
    }
    constructor.$inject = ["$scope", "$timeout", "simpleCalculatorService"];
    app.controller('simpleCalculatorController', constructor);
})(window.angular)
