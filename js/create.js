var app = angular.module('jockey');
app.controller('createCon', function($scope,$http,$rootScope,$stateParams,$state) {
  
   
    
    $scope.rec={date:new Date(),showDate:false};
    
    
$scope.add=function(){
   if($scope.rec.date==null)return alert('Please select date');

      $http({
                    method: 'POST',
                    url:$rootScope.baseURL+'/mobile/record/',
                    data: $scope.rec
            }).then(
              function successCallback(rs){
                     console.log(rs.data)
                     //$scope.rec=rs.data.rec;
            
                 $state.go('home');
              
              
                    },
              function errorCallback(response){
                  
               
              });
}     
    



});