
app.controller('xmlToJsonCtrl', function ($localStorage,$scope, $http) {
           
            $scope.LdataV = [];
           
            if(angular.isUndefined($localStorage.StorageDataV))
            {
                $scope.loading = true;
                
                $http.get("dataXml/Scrutins_XIV.xml",
                    {
                        transformResponse: function (cnv) {
                            var x2js = new X2JS();
                            var aftCnv = x2js.xml_str2json(cnv);
                            return aftCnv;
                        }
                    })
            .success(function (response) {
                for (var i = 0; i < 20; i++) {
                   $scope.LdataV[i] = response.scrutins.scrutin[i];
                }

              $localStorage.StorageDataV= $scope.LdataV;
              $scope.loading = false;
                
            });
            }
            else {$scope.LdataV = $localStorage.StorageDataV; $scope.loading = false;}
            console.log($scope.LdataV);

            /************************************************************************/
     
        });
app.controller('deputeCtrl', function ($localStorage,$scope, $http) {

       $scope.LdataD = [];
            if(angular.isUndefined($localStorage.StorageDataD))
            {
                //$scope.$emit('LOAD');
                $scope.loading = true;
                $http.get("dataXml/AMO20_dep_sen_min_tous_mandats_et_organes_XIV.xml",
                    {
                        transformResponse: function (cnv) {
                            var x2js = new X2JS();
                            var aftCnv = x2js.xml_str2json(cnv);
                            return aftCnv;
                        }
                    })
                .success(function (response) {
                   for (var i = 0; i < 20; i++) {
                      $scope.LdataD[i] = response.export.acteurs.acteur[i];
                   }
             
                  $localStorage.StorageDataD= $scope.LdataD;
                  $scope.loading = false;
                    console.log($scope.LdataD);

              });
            }
            else{ $scope.LdataD = $localStorage.StorageDataD;  console.log($scope.LdataD); $scope.loading = false}
           // console.log($scope.LdataD[0].uid.__text + " "+$scope.LdataD[0].etatCivil.ident.nom );
});