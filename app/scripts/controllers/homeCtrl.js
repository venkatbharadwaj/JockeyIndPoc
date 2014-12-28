'use strict';

/**
 * @ngdoc function
 * @name jockeyIndPocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jockeyIndPocApp
 */
angular.module('jockeyIndPocApp')

    .controller('HomeCtrl', ["$scope", "$log", "apiCallFactory","$interval",
        function ($scope, $log, apiCallFactory,$interval) {

            $scope.sizes = [];
            $scope.productsData = [];

            var config = {
                method: 'GET',
                url: "assets/productData.json"
            };

            $scope.packs = [1,2,3];
            $scope.collections = [
                "24X7 Men",
                "3D Innovations",
                "Comfort Plus",
                "Comfort Stretch",
                "Elance",
                "Gold Edition",
                "Modern Classic",
                "Relax",
                "Sport",
                "Sport Performance",
                "Zone",
                "Zone Stretch"
            ];


            $scope.loadProductsData = function () {
                apiCallFactory
                    .callApi(config)
                    .then(function (data) {
                        $log.log("Success Callback",data.response);
                        //$scope.productsData.push(data.response.docs);
                    $scope.productsData = data.response.docs;
                    $scope.src = $scope.productsData[0].tag[0];
                    console.log($scope.productsData);

                        angular.forEach(data.response.docs, function (val, key) {
                         angular.forEach(val.availablesizes, function (innerVal, key) {
                         if($scope.sizes.indexOf(innerVal) < 0){
                            $scope.sizes.push(innerVal);
                         }
                         })
                         });

                    }, function (status) {
                        $log.log("Failure Callback");
                    });
            };

            $scope.loadProductsData();

            $scope.filterBySize = function (size, checkedVal) {
                $log.log(size, checkedVal);
            };

            $scope.filterByPack = function (pack, checkedVal) {
                $log.log(pack,checkedVal);
            };

            $scope.filterByCollection = function (collection, checkedVal) {
                $log.log(collection,checkedVal);
            };
            $scope.loadMore = function() {
                $log.log("In loadMore");
                $scope.loadProductsData();
            };

            $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];


          $scope.addData = function(){
            var item = $scope.productsData[1];
            $scope.productsData.push({});
            console.log("clicked",$scope.productsData);

          };
          /*var timer=undefined;

          $scope.largeImgHover = function(tags){
            if ( angular.isDefined(timer) ) return;
            var count = 0;
            timer = $interval(function(){
              if(count >= tags.length-1){
                count=0;
              }else{
                count++;
              }
              $scope.src = tags[count];

            },500);
          };
          $scope.largeImgMleave = function(url){
            if(angular.isDefined(timer)){
              $interval.cancel(timer);
              console.log("timer stopped");
              timer=undefined;
              $scope.src= url;
            }
          };*/



        }]);
