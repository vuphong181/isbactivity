app.controller('searchId', ['$scope', '$http','test','$routeParams',function($scope, $http,test,$routeParams) {
$scope.test =test.test;
$scope.query ='';
// $scope.query2='';
console.log($scope.test);
console.log($scope.query);
	$scope.query2= $routeParams.id;
$scope.getId = function(text){


	console.log(text)
}
}]);
