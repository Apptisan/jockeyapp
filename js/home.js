var app = angular.module('jockey');
app.controller('homeCon', function($scope,$http,$rootScope,$state) {
  
        $rootScope.searchDate={
            startDate:new Date(),
            endDate:new Date()
        };
    
    $http({
                  method: 'GET',
              url:$rootScope.baseURL+'/mobile/info',
                }).then(
              function successCallback(rs){
              console.log(rs.data)
                     $rootScope.info=rs.data.info;
                 
              

              
                    },
              function errorCallback(response){
                  
               
              });
    
    
       
    
        $scope.goto=function(){
             //$state.go('list',{sd:$scope.searchDate.startDate.toDateString(),ed:$scope.searchDate.endDate.toDateString()});
                $state.go('list');
        }

    
    
});