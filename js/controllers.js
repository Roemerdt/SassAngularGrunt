myApp.controller("HomeCtrl", ['$scope', 
	function() {
		$('#home').addClass('active');
		$('#about').removeClass('active');
	}
]);

myApp.controller("AboutCtrl", ['$scope',
	function() {
		$('#about').addClass('active');
		$('#home').removeClass('active');
	}
]);