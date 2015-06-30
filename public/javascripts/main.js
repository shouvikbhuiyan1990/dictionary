var app = angular.module('dictionaryApp',[]);

app.controller('dictionaryAppCtrl',['$scope','$http',function($scope,$http){
	var config = {
		headers:{
			"X-Mashape-Key" : "j510xZMbzVmsh5NIkLyKqiZs9kcFp1Rp2T7jsnIYKkri1rSUQQ",
            "Accept" : "application/json"
        }
	}
	$scope.searchWord = function(e){
		$http.get('https://montanaflynn-dictionary.p.mashape.com/define?word='+$scope.searchTxt,config).success(function(data){
			console.log(data)
			$scope.meaning = data.definitions;
		})
	}
}])

