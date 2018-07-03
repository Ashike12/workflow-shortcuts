/// <reference path="../angular.min.js" />
/// <reference path="../angular-route.min.js" />

(function (angular) {

    "use strict"

    function constructor($http) {

        function splitLine(line) {
            var lineLen = line.length;
            var i = 0;
            var words = [];
            while (line[i] != null) {
                var word = "";
                while (line[i] >= 'a' && line[i] <= 'z' || line[i] >= 'A' && line[i] <= 'Z') {
                    word += line[i];
                    i++;
                }
                if (i != 0 && word != "")
                    words.push(word);
                i++;
            }
            return words;
        }

        function getDuplicateKey(keyList, key){
            var count = 2;
            key+= ('_' + count);
            count++;
            while(keyList[key] != undefined){
                if(key.search((count-1))>0){
                   key = key.replace((count-1), (count));
                }
                count++;
            }
            return key;
        }

        function convertTextToJson(textData, isDuplicateKeyAllowed) {
            if(!textData){
                return;
            }
            //console.log(textData);
            var splitText = textData.split(/\n/);
            var keyList = [];
            var keyValyList = [];
            var map = {};
            //console.log(splitText);
            var noOfLine = splitText.length;
            for (var i = 0; i < noOfLine; i++) {
                var line = splitText[i];
                var words = splitLine(line);
                var wordsLen = words.length;
                var mxWordInKey = Math.min(wordsLen, 3);
                var Key = "";
                if (wordsLen > 5) {
                    var countWords = 0;
                    for (var j = 0; j < wordsLen; j++) {
                        if (words[j].length > 2) {
                            if (countWords == mxWordInKey) {
                                Key += (words[j].toUpperCase()); countWords++;
                                break;
                            } else {
                                Key += (words[j].toUpperCase() + "_"); countWords++;
                            }
                        }
                    }
                } else {
                    for (var j = 0; j < wordsLen; j++) {
                        if (j == wordsLen - 1) {
                            Key += (words[j].toUpperCase()); countWords++;
                            break;
                        } else {
                            Key += (words[j].toUpperCase() + "_"); countWords++;
                        }
                    }
                }
                if (map[Key] == undefined || !isDuplicateKeyAllowed) {
                    keyList.push(Key);
                    keyValyList.push(line);
                    map[Key] = "";
                } else {
                    if (map[Key] != undefined) {
                        Key = getDuplicateKey(map,Key);
                    }
                    keyList.push(Key);
                    keyValyList.push(line);
                    map[Key] = "";
                }
            }

            //creating new object //
            var newObj = {};
            for (var index = 0; index < keyList.length; index++) {
                //console.log(keyList[index]+": "+keyValyList[index]);
                var Keyval = keyValyList[index];
                if (Keyval[0] == '-') {
                    Keyval = Keyval.replace("-", "");
                    var childObj = {};
                    var preIndex = index;
                    childObj[keyList[index]] = Keyval;
                    index++;
                    while (1) {
                        var listVal = keyValyList[index];
                        if (index < keyList.length && listVal[0] == '-') {
                            listVal = listVal.replace("-", "");
                            childObj[keyList[index]] = listVal;
                            index++;
                        } else {
                            break;
                        }
                    }
                    var listItemName = keyList[preIndex - 1] + "_LIST";
                    newObj[listItemName] = childObj;
                }
                else {
                    newObj[keyList[index]] = Keyval;
                }

            }
            return JSON.stringify(newObj, null, 4);
        }

        function getData(URL) {
            return $http({
                method: "GET",
                url: URL
            }).then(function mySuccess(response) {
                return response.data;
            }, function myError(response) {
                return response.statusText;
            });
        }

        this.getData = getData;
        this.convertTextToJson = convertTextToJson;
    }

    app.service('dataService', constructor);
})(window.angular)
