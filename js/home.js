var app = angular.module('jockey');
app.controller('homeCon', function($scope,$http,$rootScope,$state,$cordovaSQLite) {
    
   
       
    
//      
//     function insert(firstname, lastname) {
//        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
//        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
//            console.log("INSERT ID -> " + res.insertId);
//        }, function (err) {
//            console.error(err);
//        });
//    }
   // insert('siheng','wu');
    
    
    //***********************************//
    
    $rootScope.isShown=false;
$rootScope.openTradeType=function(){
      $rootScope.isShown=true;
    $rootScope.tradeType=true;
}    

$rootScope.closeTradeType=function(){
     $rootScope.isShown=false;
        $rootScope.tradeType=false;

}


$rootScope.openDisplayType=function(){
     $rootScope.isShown=true;
        $rootScope.displayType=true;

}


$rootScope.closeDisplayType=function(){
    $rootScope.isShown=false;
        $rootScope.displayType=false;

}



var startDate=new Date();
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    
var endDate=new Date();
    endDate.setHours(23);
    endDate.setMinutes(59);
    endDate.setSeconds(59);
    

        $rootScope.searchDate={
            startDate:startDate,
            endDate:endDate
        };
     
    
//    $http({
//                  method: 'GET',
//              url:'http://dreamprojet2back-env.ap-northeast-1.elasticbeanstalk.com/mobile/info',
//                }).then(
//              function successCallback(rs){
//              console.log(rs.data)
//                     $rootScope.info=rs.data.info;
//                 console.log("done ok")
//              
//
//              
//                    },
//              function errorCallback(response){
//                  
//               console.log(response)
//              });
//    
    
       
    
        $scope.goto=function(){
             //$state.go('list',{sd:$scope.searchDate.startDate.toDateString(),ed:$scope.searchDate.endDate.toDateString()});
                $state.go('list');
        }

    
    
});