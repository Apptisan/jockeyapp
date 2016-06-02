var app = angular.module('jockey');
app.controller('recordCon', function($scope,$http,$rootScope,$stateParams,$state) {
  
   
  
    
    
      $http({
                    method: 'GET',
                    url:$rootScope.baseURL+'/mobile/record/'+$stateParams._id
            }).then(
              function successCallback(rs){
                     $scope.rec=rs.data.rec;
                
            $scope.rec.date=new Date($scope.rec.date);
              
              
                    },
              function errorCallback(response){
                  
               
              });
    
    
    
$scope.save=function(){
   if($scope.rec.date==null)return alert('Please select date');
      $http({
                    method: 'PUT',
                    url:$rootScope.baseURL+'/mobile/record/',
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
    

$scope.delete=function(){
    
    if(!confirm("Are you sure?"))return;
       
    
    $http({
                    method: 'DELETE',
                    url:$rootScope.baseURL+'/mobile/record/'+$scope.rec._id
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