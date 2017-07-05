var app = angular.module('app',[])
 
app.controller('BeerCounter', function($scope,$http) {
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];
  
  
  $scope.records = [
        "Alfreds Futterkiste",
        "Berglunds snabbköp",
        "Centro comercial Moctezuma",
        "Ernst Handel",
    ]
	
	$http.get('TestExercise/data.json').then(function success(result){
			$scope.mainTitle="";
			$scope.headmenu=[];
			  //$scope.description=[];
			  $scope.title=[];
			  $scope.url=[];
			  $scope.description_companies=[];
			  $scope.title_companies=[];
			  $scope.url_companies=[];
			console.log(result)
			//alert(result)
			$scope.jsonval=result.data;
			$scope.description=$scope.jsonval.description;
			//alert($scope.heading);
			//alert($scope.jsonval.rows.length);
			$scope.mainTitle=$scope.jsonval.title;
			for(var i=0;i<$scope.jsonval.rows.length;i++){
			 
			  $scope.menu=$scope.jsonval.rows[i].category;
				if ($scope.headmenu.indexOf($scope.jsonval.rows[i].category) == -1) {
					$scope.headmenu.push($scope.jsonval.rows[i].category);
				}
			  
			  //alert($scope.menu);
			
			  if($scope.menu == "Companies"){
				$scope.description_companies.push($scope.jsonval.rows[i].description);
				$scope.title_companies.push($scope.jsonval.rows[i].title);
				$scope.url_companies.push($scope.jsonval.rows[i].url);
			  }else{
				$scope.description.push($scope.jsonval.rows[i].description);
				$scope.title.push($scope.jsonval.rows[i].title);
				$scope.url.push($scope.jsonval.rows[i].url);
			  }
			}
			console.log($scope.headmenu);
			console.log($scope.title_companies);
			console.log($scope.title);
			
			}, function error(err) {
				console.log(err);
			})
});