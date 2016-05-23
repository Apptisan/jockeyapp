var app = angular.module('jockey');
app.controller('listCon', function($scope,$http,$state) {
    
   
//    
//     $http({
//                  method: 'GET',
//              url:'http://192.168.1.147/mobile/record/',
//                }).then(
//              function successCallback(rs){
//              
//                      $scope.records= rs.data;
//            
//              
//              
//              
//                    },
//              function errorCallback(response){
//                  
//               
//              });
//    
    
    $scope.goto=function(_id){
        $state.go('record',{_id:_id});
    }
});