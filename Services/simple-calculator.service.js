/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />

(function (angular){

    "use strict"

    function constructor(){

        function GCD(a,b){
            return b==0 ? a : GCD(b,a%b);
        }

        function LCM(a,b){
            return a*(b/GCD(a,b));
        }

        function calculateResult(expression){
            var operator;
            if(expression.split("+")!=expression){
                operator = expression.split("+");
                return Number(operator[0]) + Number(operator[1]);
            }
            else if(expression.split("-")!=expression){
                operator = expression.split("-");
                return Number(operator[0]) - Number(operator[1]);
            }
            else if(expression.split("*")!=expression){
                operator = expression.split("*");
                return Number(operator[0]) * Number(operator[1]);
            }
            else if(expression.split("/")!=expression){
                operator = expression.split("/");
                return Number(operator[0]) / Number(operator[1]);
            }
            else if(expression.split("%")!=expression){
                operator = expression.split("%");
                return Number(operator[0]) % Number(operator[1]);
            }
            else if(expression.split("GCD")!=expression){
                operator = expression.split("GCD");
                return GCD(Number(operator[0]), Number(operator[1]));
            }
            else if(expression.split("LCM")!=expression){
                operator = expression.split("LCM");
                return LCM(Number(operator[0]), Number(operator[1]));
            } else{
                return "Enter valid operator.";
            }
        }

        this.calculateResult = calculateResult;
    }

    app.service('simpleCalculatorService', constructor);
})(window.angular)