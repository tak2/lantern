// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers' ])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider

.state('main', {
  url: '/main',
  //  abstract: true,
  templateUrl: 'templates/main.html',
  controller: 'MainCtrl'
})
.state('main.map', {
    url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html'
        }
      }
})
  .state('main.profile', {
      url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html'
          }
        }
  })
  .state('main.rides', {
      url: '/rides',
      views: {
        'menuContent': {
          templateUrl: 'templates/rides.html'
        }
      }
  })
  .state('main.balance', {
    url: '/balance',
    views: {
      'menuContent': {
        templateUrl: 'templates/balance.html'
      }
    }
  })
  .state('main.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
      }
    }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/rides');
});
