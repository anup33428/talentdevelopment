angular.module("myApp", ['ngRoute'])
	.controller("myController", function ($scope, $location) {

		$scope.repositories = ["GitHub", "Stackoverflow", "HackerEarth"];

		$scope.gotoUrl = function (page) {
			if (page != '/register' || page != '/login') {
				window.open('/views' + page + '.html', "_self")
					//				location.pathname = '/views' + page + '.html';
			}
			$location.path(page);
		};
	})
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'views/login.htm',
		}).
		when('/login', {
			templateUrl: 'views/login.htm',
		}).
		when('/register', {
			templateUrl: 'views/register.htm',
		});
    }]);