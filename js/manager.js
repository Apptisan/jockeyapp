var app = angular.module('jockey');
app.controller('managerCon', function($scope,$http,$rootScope,$state) {
  
    
      $http({
                    method: 'GET',
                    url:'http://localhost/mobile/info/'
            }).then(
              function successCallback(rs){
              console.log(rs.data)
                     $scope.info=rs.data.info;
            
              
              
              
                    },
              function errorCallback(response){
                  
               
              });
    
    
    
    
    
$scope.save=function(){
   
      $http({
                    method: 'PUT',
                    url:'http://localhost/mobile/info/',
                    data: $scope.info
            }).then(
              function successCallback(rs){
                     console.log(rs.data)
                    
            
                 $state.go('home');
              
              
                    },
              function errorCallback(response){
                  
               
              });
}     
    


    
});