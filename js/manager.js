var app = angular.module('jockey');
app.controller('managerCon', function($scope,$http,$rootScope,$state) {
  
    
      $http({
                    method: 'GET',
                    url:$rootScope.baseURL+'/mobile/info/'
            }).then(
              function successCallback(rs){
              console.log(rs.data)
                     $scope.info=rs.data.info;
                    $scope.info.date=new Date($scope.info.date);
              
              
              
                    },
              function errorCallback(response){
                  
               
              });
    
    
    
    
    
$scope.save=function(){
   
      $http({
                    method: 'PUT',
                    url:$rootScope.baseURL+'/mobile/info/',
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