var app1 =angular.module('MyApp', []);
   app1.controller('MyCtrl',   function($scope, $timeout){
       $scope.MyHeader='';
       $timeout(function(){
           $scope.MyHeader = 'Do you need a plumber?';}, 3000
       );
          $scope.MyHeader1='';
       $timeout(function(){
           $scope.MyHeader1 = 'Do you need a stylist?';}, 6000
       );
         $scope.MyHeader2='';
       $timeout(function(){
           $scope.MyHeader2 = 'Do you need technical service?';}, 9000
       );
         $scope.MyHeader3='Connect with the service you need.';
       $timeout(function(){
           $scope.MyHeader3 = 'Find the service you need.';}, 12000
       );

   });