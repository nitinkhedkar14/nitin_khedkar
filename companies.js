var app=angular.module('MyApp',[]);
app.controller('myCtrl', function($scope, $http) {
    $http.get("Data.json")
    .then(function(response) {
        $scope.myData = response.data;
		alert($scope.myData);
    });
});