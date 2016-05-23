var app = angular.module('jockey');
app.controller('createCon', function($scope,$http,$rootScope,$stateParams,$state) {
  
   
    
    $scope.rec={};
    
    
$scope.add=function(){
   console.log($scope.rec)
      $http({
                    method: 'POST',
                    url:'http://localhost/mobile/record/',
                    data: $scope.rec
            }).then(
              function successCallback(rs){
                     console.log(rs.data)
                     //$scope.rec=rs.data.rec;
            
                 $state.go('list');
              
              
                    },
              function errorCallback(response){
                  
               
              });
}     
    



});