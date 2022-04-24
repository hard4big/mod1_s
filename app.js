(function () {
  'use strict'

  angular.module('lunchCheck', [])
  .controller('MsgController', MsgController);
  MsgController.$inject = ['$scope'];

  function MsgController($scope){
    $scope.value = "";
    $scope.msg = "";
    $scope.clickVerify = function(string) {
      var newArray = string.split(",");
      var count = 0;
      for(var i = 0; i<newArray.length; i++) {
        var arrayItem = newArray[i];
        var newString = verifyString(arrayItem);
        if(newString != "") count++;
      };
      if(count > 0 && count <= 3){
          $scope.colorStyle = {
              "color" : "green"
          }
         $scope.msg = "Enjoy!"
       }
      else if(count > 3) {
        $scope.colorStyle = {
              "color" : "red"
        }
        $scope.msg = "Too much!"
      }
      else {
        $scope.colorStyle = {
              "color" : "red"
          }
        $scope.msg = "Please enter data first";
      }
    }

    function verifyString(string) {
      for(var i = 0; i<string.length; i++)  {
          string = string.replace(" ", "");
      }
      return string;
    }
  }


})
();
