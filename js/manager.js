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
                    $scope.info.time=new Date($scope.info.time);
              
              
                    },
              function errorCallback(response){
                  
               
              });
    
    
    
    
    
$scope.save=function(){
   console.log($scope.info.time)
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