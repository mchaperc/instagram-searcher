var myModule = angular.module('myApp', []);

var InstagramSearchCtrl = myModule.controller('InstagramSearchCtrl', function($scope, $http) {

	$scope.loading = false;
	$scope.data = [];
	$scope.images = [];
	
	$scope.submit = function (searchTerm) {
		$scope.searchTerm = searchTerm;
		$scope.loading = true;
		$scope.goFetch(searchTerm);
	};

	$scope.goFetch = function(searchTerm) {
		var url = "https://api.instagram.com/v1/tags/" + searchTerm + "/media/recent";
		var request = {
			callback: 'JSON_CALLBACK',
			client_id: 'a5533b066261464e98aeebded5620c4c'
		}
		$http({
			method: 'JSONP',
			url: url,
			params: request
		})
		.success(function(response) {
			$scope.data = [];
			$scope.data = response.data;
			console.log($scope.data);
			$scope.loading = false;
			$scope.searchSuccess = true;
		})
		.error(function(error) {
			alert('error: ' + error);
		})
	}

})