var app = angular.module('jockey');
app.controller('homeCon', function($scope,$http,$rootScope,$state) {
  
        $rootScope.searchDate={
            startDate:new Date(),
            endDate:new Date()
        };
    
    $http({
                  method: 'GET',
              url:'http://dreamprojet2back-env.ap-northeast-1.elasticbeanstalk.com/mobile/info',
                }).then(
              function successCallback(rs){
              console.log(rs.data)
                     $rootScope.info=rs.data.info;
                 console.log("done ok")
              

              
                    },
              function errorCallback(response){
                  
               console.log(response)
              });
    
    
       
    
        $scope.goto=function(){
             //$state.go('list',{sd:$scope.searchDate.startDate.toDateString(),ed:$scope.searchDate.endDate.toDateString()});
                $state.go('list');
        }

    
    
});