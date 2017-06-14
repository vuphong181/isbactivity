var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "search.html",
		controller : "searchId"
	})
	.when("/result/:id", {
		templateUrl : "report.html",
		controller : "searchId"
	})
	.otherwise ({redirectTo: '/'})
});
