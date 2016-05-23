var app = angular.module('jockey');
app.controller('homeCon', function($scope,$http,$rootScope) {
  
        
   
    
    
    $http({
                  method: 'GET',
              url:'http://192.168.1.147/mobile/info',
                }).then(
              function successCallback(rs){
              console.log(rs.data)
                     $rootScope.rec=rs.data.info;
                 
              

              
                    },
              function errorCallback(response){
                  
               
              });
    
    
});