// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('jockey', ['ionic','ion-affix','ngCordova'])

.run(function($ionicPlatform,$rootScope) {
  $ionicPlatform.ready(function() {
      $rootScope.baseURL='http://dreamprojet2back-env.ap-northeast-1.elasticbeanstalk.com';
   
      
      
      
      
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
//db = window.openDatabase("my.db", '1', 'my', 1024 * 1024 * 100);

     
if (window.cordova) {
  
 var db = sqlitePlugin.openDatabase({ name: "iautocount.db", location: 'default'}); //device
    $rootScope.db=db;
        db.executeSql('DROP TABLE IF EXISTS info');
  db.executeSql('CREATE TABLE info (date DATETIME, account VARCHAR(20), balance INT)');
     
            //db.executeSql('CREATE TABLE IF NOT EXISTS info (date DATE, account VARCHAR(20), balance INT)');

    
    //insert dummy data
    db.executeSql('INSERT INTO info VALUES (?,?,?)', [new Date(),'4345544',563473], function (resultSet) {
  //alert('resultSet.insertId: ' + resultSet.insertId);

    
       //get dummny data
      db.executeSql('SELECT * FROM info', [], function (resultSet) {
    for(var i=0;i<resultSet.rows.length;i++)
        {
            
           $rootScope.info=resultSet.rows.item(i);
           $rootScope.info.date=new Date($rootScope.info.date) 

        }
       
}, function(error) {
  console.log('SELECT error: ' + error.message);
});
    //get dummy
    
    }, function(error) {
  console.log('SELECT error: ' + error.message);
});
    
      
 
    

}else{
    //using web sql which only works on Chome
    
// $rootScope.db = window.openDatabase("iautocount.db", '1', 'auto', 1024 * 1024 * 100); // browser
//    var msg;
//        $rootScope.db.transaction(function (context) {
//           context.executeSql('CREATE TABLE IF NOT EXISTS testTable (id unique, name)');
//           context.executeSql('INSERT INTO testTable (id, name) VALUES (0, "Byron")');
//           context.executeSql('INSERT INTO testTable (id, name) VALUES (1, "Casper")');
//           context.executeSql('INSERT INTO testTable (id, name) VALUES (2, "Frank")');
//         });
//
//        $rootScope.db.transaction(function (context) {
//           context.executeSql('SELECT * FROM testTable', [], function (context, results) {
//            var len = results.rows.length, i;
//            console.log('Got '+len+' rows.');
//               for (i = 0; i < len; i++){
//              console.log('id: '+results.rows.item(i).id);
//              console.log('name: '+results.rows.item(i).name);
//            }
//         });
//        });

}
      
 
     
  });

    


})

.filter('dashFilter',function(){
        
       
    return function(input,showDate){
         
        if(input==null||input==''||showDate==false)
            return '-'
        else return input;
    }
    
        })



.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
         $ionicConfigProvider.navBar.alignTitle('center');
  $stateProvider

  // setup an abstract state for the tabs directive
      .state('home', {
    url: '/home',
        cache: false,
    templateUrl: 'templates/home.html',
    controller: 'homeCon'
  })
   .state('list', {
    url: '/list/',
      cache: false,
    templateUrl: 'templates/list.html',
    controller: 'listCon'
  })
   .state('record', {
    url: '/record/:_id',
      cache: false,
    templateUrl: 'templates/record.html',
    controller: 'recordCon'
  })
   .state('manager', {
    url: '/manager',
      cache: false,
    templateUrl: 'templates/manager.html',
    controller: 'managerCon'
  })
   .state('create', {
    url: '/create',
       cache: false,
    templateUrl: 'templates/create.html',
    controller: 'createCon'
  })
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});

