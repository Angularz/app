(function() {
	var angularz = angular.module('angularz', []);

	angularz.controller('angularzController', function() {
		this.novo = example;
	});

	var example = {
		newTest: 'teste',
		name: 'Nome teste 1',
		id: '12',
		email: 'ricardo@examplo.com'
	}
})();