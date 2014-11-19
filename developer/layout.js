developerKingdomModule.
	controller("layoutCtrl", function layoutCtrl($scope, $window){

		$scope.fullWidth = false;

		$scope.setSize = function(){
			if($window.innerWidth <= 1410){
				$scope.fullWidth = '100%';
			}
			else{
				$scope.fullWidth = '50%';
			}
		}
		
		var w = angular.element($window);
  
		w.bind('resize', function () {
			$scope.setSize();
		});
	});