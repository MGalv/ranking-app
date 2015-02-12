var controller = angular.module('rankingController', []);

controller.controller('rankingController', function($scope){
  $scope.rankings= [
    {name: 'luis', score: 12},
    {name: 'juan', score: 3},
    {name: 'pedro', score:100},
    {name: 'mario', score: 7},
    {name: 'luna', score:8}
  ];

  $scope.addRank = function(){
    $scope.rankings.push({name: $scope.newRank, score: 0});
    $scope.newRank = "";
  }

  $scope.increase = function(ranking){
    ranking.score ++;
  }

  $scope.decrease = function(ranking){
    if (ranking.score > 0){
      ranking.score --;
    }
  }

  $scope.sortOrder = 'score';
});