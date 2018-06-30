/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />

(function (angular){

    "use strict"

    function constructor(){
        var self = this;
        return {
            restrict: 'EA',
            require: "",
            template: function(scope, attr){
                console.log(scope);
                return addCheckbox(attr);
            }
        }

        function addCheckbox(attr){
            //var checkBox = '<md-checkbox class="md-primary" ng-model="vm.formData.IsFirstBeneficialSpouseOccupationApplicable1" aria-label="::vm.localizationObj.COMMON_LOCALIZATION_DATA.SPOUSE_NOT_APPLICABLE"> \n<span ng-bind="::vm.localizationObj.COMMON_LOCALIZATION_DATA.SPOUSE_NOT_APPLICABLE"></span>\n<span class="slpc-workflow-dual-language" ng-bind="::vm.localizationObj.COMMON_LOCALIZATION_DATA.SPOUSE_NOT_APPLICABLE_LOCAL"></span>\n</md-checkbox>'
            var checkbox = {
                "class": "md-primary",
                "model": attr.modelname,
                "span": ""
            }
            var templateForCheckBoxGroup = "";
            var stringOfNumber = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
            for(var i=0;i<attr.noofcheckbox;i++){
                checkbox.model = ("vm.formData.test"+(i+1)); 
                checkbox.span = "<span>"+(JSON.parse(attr.languagefile))[i]+"</span>"
                templateForCheckBoxGroup += '<md-checkbox class="'+checkbox.class+'" ng-model="'+checkbox.model+stringOfNumber[i]+'">\n'+checkbox.span+"\n</md-checkbox>\n\n";
            }
            return templateForCheckBoxGroup;
        }
    }

    app.directive('checkboxgroup', constructor);
})(window.angular)