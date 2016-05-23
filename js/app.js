// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('jockey', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      
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
      
     
  });
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
    url: '/list',
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

