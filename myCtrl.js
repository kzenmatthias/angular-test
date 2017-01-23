app.controller("myCtrl", function($scope, $http) {

	$scope.firstName = "Matthias";
	$scope.lastName = "Andriessen";
	$scope.changeContent = function() {
		$scope.firstName = "Jefke";
	};

	$scope.data = $http
		.get("http://www.w3schools.com/angular/customers.php")
		.then(
			function(response) {
				$scope.data = response.data.records;
			},
			function(response) {
				console.log("something went wrong");
			}
		);

});

app.filter('myFilter', function() {
	return function(x) {
		return x.toUpperCase();
	};
});

app.directive("matthiasTestDirective", function() {

	return {
		template : "<h1>Nog eens een test met Directives. Bleigh!</h1>"
	}

});