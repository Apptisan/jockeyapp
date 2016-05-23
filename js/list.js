var app = angular.module('jockey');
app.controller('listCon', function($scope,$http,$state) {
    
    $scope.time="12/05/2016 17:53";
    $scope.acc="82323543";
    $scope.balance="19,343,654.90";
    
    
     $http({
                  method: 'GET',
              url:'http://localhost/mobile/record/',
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