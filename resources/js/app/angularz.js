(function() {
	var translations = {
	  viewMore: "{{value}}",
	  viewMoreTrue: 'View More!',
	  viewMoreFalse: 'Show less',
	  active: "{{value}}",
	  activeTrue: 'Activate!',
	  activeFalse: 'Deactivate!',
	  noGamesMsg: 'buy a new game!'
	};

	var angularz = angular.module('angularz', ['pascalprecht.translate']);

	angularz.config(['$translateProvider', function ($translateProvider) {
	  // add translation table
		$translateProvider.translations('en', translations);
  		$translateProvider.preferredLanguage('en');
	}]);

	angularz.controller('angularzController', ['$scope', function ($scope) {

		$scope.example = {
			name: 'Games:',
			id: '12',
			email: 'ricardo@examplo.com',
			games: {
				namesLess: [
					'Halo 5',
					'Fallout 4',
					'Mario Maker',
					'...'
				],
				namesMore: [
					'Halo 5',
					'Fallout 4',
					'Mario Maker',
					'Tomb Raider',
					'Quantum Break'
				]
			},
			active: true,
			viewMore: true		
		};

		$scope.toogle = function() {
			$scope.example.viewMore ? $scope.example.viewMore = false : $scope.example.viewMore = true;
		};
		$scope.toogleActive = function() {
			$scope.example.active ? $scope.example.active = false : $scope.example.active = true;
		};
	}]);
})();