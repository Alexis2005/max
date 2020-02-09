 var firebaseConfig = {
    apiKey: "AIzaSyBb7o2Sk31gblb0icSVlb4dkAGWw93D_hY",
    authDomain: "maxapp-fe9e8.firebaseapp.com",
    databaseURL: "https://maxapp-fe9e8.firebaseio.com",
    projectId: "maxapp-fe9e8",
    storageBucket: "maxapp-fe9e8.appspot.com",
    messagingSenderId: "135200061544",
    appId: "1:135200061544:web:8f76a3c1378405b43423dd",
    measurementId: "G-EMQJYSBXLS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
angular.module('starter.controllers', [])

.controller("Registro",function($scope, $rootScope){

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
