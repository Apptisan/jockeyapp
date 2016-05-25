var app = angular.module('jockey');
app.controller('listCon', function($scope,$http,$state,$rootScope) {
    
    
     $http({
                  method: 'GET',
              url:$rootScope.baseURL+'/mobile/record/'+$rootScope.searchDate.startDate+'/'+$rootScope.searchDate.endDate,
                }).then(
              function successCallback(rs){
              
                      $scope.records= rs.data;
            
              
              
              
                    },
              function errorCallback(response){
                  
               
              });
    
    
    $scope.goto=function(_id){
        $state.go('record',{_id:_id});
    }
});