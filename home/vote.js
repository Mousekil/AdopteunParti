
app.controller('voteCtrl', function($localStorage,$scope) {
             
                 
            if(angular.isUndefined($localStorage.Vote)){
		            $localStorage.Vote = [];
		          
		            	
				    $scope.changeVote = function(vote, flag,num) { 
				    	if(vote==flag){
							$scope.vote = 'None';
				    	}

				    	else {
				    		 $scope.vote = {vote:flag,id:num};
				    		          
                             for (var i = $localStorage.Vote.length - 1; i >= 0; i--) {
                             	if($localStorage.Vote[i].id==$scope.vote.id){
                             		alert("ko")
                             		return;
                             	}
                             }
                            $localStorage.Vote.push($scope.vote);  
                            $scope.btnresult=true;
				       }
				    }
				}
		    else {
		    	     $scope.btnresult=true;
			    	$scope.vote = $localStorage.Vote;
			    	$scope.changeVote = function(vote, flag,num) { 
			    	if(vote==flag){
						$scope.vote = 'None';
			    	}
			    	else {
			    	  
			    	  $scope.vote = {vote:flag,id:num};			    	  
			             for (var i = $localStorage.Vote.length - 1; i >= 0; i--) {
                             	if($localStorage.Vote[i].id==$scope.vote.id){
                             		alert("Oups vous avez deja vote !")
                             		return;
                             	}
                             }
                       $localStorage.Vote.push($scope.vote); 
			    	 $scope.btnresult=true;
			      }
			    }
			}
		    
		    
  
});