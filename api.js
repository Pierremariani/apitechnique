var app = angular.module("app", []);

app.controller('mainCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        //should be an htpp adress to call API
        url:'localhost:8080' 
    }).success(function(data){
        $scope.objects = data;
        console.log(data);
    }).catch(function(response){
        console.log('response:', response);
    });
});