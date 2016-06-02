var app = angular.module('jockey');
app.controller('managerCon', function($scope,$http,$rootScope,$state) {
  
    
//      $http({
//                    method: 'GET',
//                    url:$rootScope.baseURL+'/mobile/info/'
//            }).then(
//              function successCallback(rs){
//              console.log(rs.data)
//                     $scope.info=rs.data.info;
//                    $scope.info.date=new Date($scope.info.date);
//                    $scope.info.time=new Date($scope.info.time);
//              
//              
//                    },
//              function errorCallback(response){
//                  
//               
//              });   
//    
//     $rootScope.db.executeSql('SELECT * FROM info', [], function (resultSet) {
//    for(var i=0;i<resultSet.rows.length;i++)
//        {
//           $scope.info=resultSet.rows.item(i);
//
//        }
//       
//}, function(error) {
//  console.log('SELECT error: ' + error.message);
//}); 
     
$scope.save=function(){
 var info=$rootScope.info;
      $rootScope.db.executeSql('INSERT INTO info VALUES (?,?,?)', [info.date,info.account,info.balance], function (resultSet) {
  //alert('resultSet.insertId: ' + resultSet.insertId);
 $state.go('home');
    
    }, function(error) {
  console.log('SELECT error: ' + error.message);
});
}    
    
//$scope.save=function(){
//
//      $http({
//                    method: 'PUT',
//                    url:$rootScope.baseURL+'/mobile/info/',
//                    data: $scope.info
//            }).then(
//              function successCallback(rs){
//                     console.log(rs.data)
//                    
//            
//                 $state.go('home');
//              
//              
//                    },
//              function errorCallback(response){
//                  
//               
//              });
//}     
//    


    
});