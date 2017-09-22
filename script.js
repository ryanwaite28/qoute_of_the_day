
var App = angular.module("myApp", []);

App.controller("masterCtrl", ["$scope", function($scope){
  $(document).ready(function(){

    $.getJSON("https://quotes.rest/qod.json", (resp) => {
      console.log(resp);
      $scope.contents = resp
      $scope.quote = resp.contents.quotes[0]
      $scope.$apply(function(){console.log($scope);});
    })
    .error(() => {
      alert("Error: No Data Came...");
    });

  });
}])
