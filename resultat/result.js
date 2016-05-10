app.controller('resultCtrl', function ($localStorage,$scope,$http) {

      
	         if(angular.isUndefined($localStorage.depute))
	         {
		              for (var i = $localStorage.StorageDataD.length - 1; i >= 1; i--) {
		               	  for (var i =$localStorage.StorageDataV.length - 1; i >= 0; i--) {
		               	  	console.log($localStorage.StorageDataV[i].miseAuPoint.contres.vontans[i].acteurRef)
		               	  	if($localStorage.StorageDataV[i].miseAuPoint.contres.vontans[i].acteurRef == $localStorage.StorageDataD[i].uid.__text)
		              	  	{
		               	  		    $scope.depute = {"civ":$scope.StorageDataD[i].etatCivil.ident.civ,"nom":$scope.StorageDataD[i].etatCivil.ident.nom,"prenom":$scope.StorageDataD[i].etatCivil.ident.prenom};
		               	  		    $localStorage.depute = $scope.depute;
		               	  		    console.log($scope.depute)
		               	  	}
		               	  }
		              }
		              $localStorage.depute = $scope.depute;
		         
	       }
	         else {
	          	 $scope.depute = $localStorage.depute;
	          }
 

});
