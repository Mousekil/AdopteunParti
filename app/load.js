app.controller('loadCtrl', function ($localStorage,$scope, $http) {
	  if(angular.isUndefined($localStorage.StorageDataD) || angular.isUndefined($localStorage.StorageDataV))
	  	     $scope.loading = true;
});