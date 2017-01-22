app.controller("myCtrl", function($scope) {

	$scope.firstName = "Matthias";
	$scope.lastName = "Andriessen";

});

app.directive("matthiasTestDirective", function() {

	return {
		template : "<h1>Nog eens een test met Directives. Bleigh!</h1>"
	}

});